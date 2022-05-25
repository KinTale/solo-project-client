import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Avatar, Box, Typography, Paper, Button, Link } from '@mui/material';
import { useState } from 'react';
import AddMemberForm from './add-member';



export default function MembersList({ role }) {
    const paperStyle = {
        width: 800,
        mb: 50,
        backgroundColor: 'background.paper',
        padding: 5,
        color: 'primary.main',
        fontSize: '2rem'
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
       mt: -5
        }}>
            <AddMemberForm open={open} handleClose={handleClose} />
            <Paper elevation={3} sx={paperStyle}>
                <Typography variant='h4' gutterBottom >Members list
                    {role === 'ADMIN' && (
                        <Box>
                            <Link to='/addmember'><Button size="small" onClick={handleClickOpen} >Add Member</Button></Link>

                        </Box>
                    )}
                    
                    <hr style={{ border: '1px solid ' }}></hr></Typography>
                <ImageList sx={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    width: 800,
                    p: 2,
                }}>

                    {itemData.map((item, index) => (
                        <ImageListItem key={index} sx={{ p: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar></Avatar>
                            </Box>

                            <ImageListItemBar
                                title={<Typography variant='h7' fontWeight='bold'>{item.title}</Typography>}
                                subtitle={<Typography variant='subtitle1'>{item.position}</Typography>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}

                </ImageList>
            </Paper>

        </Box>

    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Ang Dawa Sheepa',
        position: 'Chairman',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Motilal Tamang ',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Gamar Singh Gurung',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Gopal Tamang',
        position: 'Manager',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Dev Gurung',
        position: 'Tresurer',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Motilal Tamang ',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Gamar Singh Gurung',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Gopal Tamang',
        position: 'Manager',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Dev Gurung',
        position: 'Tresurer',
    }, {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Motilal Tamang ',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Gamar Singh Gurung',
        position: 'Vice chairmen',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Gopal Tamang',
        position: 'Manager',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Dev Gurung',
        position: 'Tresurer',
    },

];
