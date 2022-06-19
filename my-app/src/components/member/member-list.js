import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import AddMemberForm from './add-member';
import client from '../../ultis/client';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Member from '../../images/member.jpeg'

export default function MembersList({ role }) {
    const paperStyle = {
        width: 800,
        mb: 10,
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
            mt: -6
        }}>
            <AddMemberForm open={open} handleClose={handleClose} resetMembers={resetMembers} setResetMembers={setResetMembers} />
            <Paper elevation={3} sx={paperStyle}>
                <Typography variant='h5' gutterBottom >Current members
                    {role === 'ADMIN' && (
                        <Box>
                            <Button size="small" startIcon={<AddBoxIcon/>} onClick={handleClickOpen} >Add Member</Button>
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
                                <img src={Member} alt='member logo' width= '84' height='84'/>
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
