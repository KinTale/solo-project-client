import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Avatar, Box, Typography, Paper, Button, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import AddMemberForm from './add-member';
import client from '../../ultis/client';
import DeleteIcon from '@mui/icons-material/Delete';


export default function MembersList({ role }) {
    const paperStyle = {
        width: 800,
        mb: 50,
        backgroundColor: 'background.paper',
        padding: 5,
        color: 'primary.main',
        fontSize: '2rem'
    }
    const [currenMembers, setCurrentMembers] = useState([])
    const [open, setOpen] = useState(false);
    const [resetMembers, setResetMembers] = useState(0)

    useEffect(() => {
        client.get('/members/memberlist')
            .then((res) => setCurrentMembers(res.data.data))
            .catch((err) => console.log(err.response))
    }, [resetMembers])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = (memberId) => {

        client.delete(`/members/delete/${memberId}`)
            .then((res) => setResetMembers(resetMembers + 1))
            .catch((err) => console.log(err.response))
    };
    console.log('state', currenMembers)
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -5
        }}>
            <AddMemberForm open={open} handleClose={handleClose} resetMembers={resetMembers} setResetMembers={setResetMembers} />
            <Paper elevation={3} sx={paperStyle}>
                <Typography variant='h4' gutterBottom >Current members
                    {role === 'ADMIN' && (
                        <Box>
                            <Link to='/addmember'><Button size="small" onClick={handleClickOpen} >Add Member</Button></Link>
                        </Box>
                    )}
                    <hr style={{ border: '1px solid ' }}></hr></Typography>
                <ImageList sx={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    width: 810,
                    p: 2,
                }}>

                    {currenMembers.map((member, index) => (
                        <ImageListItem key={index} sx={{ display: 'flex', flexWrap: 'wrap', p: 1, width: 150, mr: 5 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar variant="square" sx={{ width: 84, height: 84 }}></Avatar>
                                {role === 'ADMIN' && (
                                    <Button onClick={() => handleDelete(member.id)} ><DeleteIcon /></Button>
                                )}
                            </Box>

                            <ImageListItemBar
                                title={<Typography variant='h7' fontWeight='bold'>{member.name}</Typography>}
                                subtitle={<Typography variant='subtitle1'>{member.title}</Typography>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}

                </ImageList>
            </Paper>

        </Box>

    );
}
