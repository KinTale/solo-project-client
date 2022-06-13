import React from 'react';
import { Box } from '@mui/system'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import storage from '../../ultis/storage';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, ButtonGroup } from '@mui/material'

export default function NavBar({ role, setLoggedIn }) {

    const NavButton = styled(Button)(({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main
        }
    }))
    const linkDeco = { textDecoration: 'none' }

    const buttonContainer = {
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        minWidth: '105vw',
        alignItems: 'center',
        '& > *': {
            m: 0.5,
        },
    }
    let navigate = useNavigate();
    const signOut = (event) => {
        event.preventDefault();
        storage.clearStorage();
        setLoggedIn(false)
        navigate('../login');
    };
    return (
        <AppBar position='sticky'>
            <Box sx={buttonContainer} >
                <ButtonGroup variant="fixed"  >

                    <Link to='/' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }} >  Home</NavButton></Link>
                    <Link to='/aboutus' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }}>About us</NavButton></Link>
                    <Link to='/members' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }}>Members</NavButton></Link>
                    {/* <Link to='/event' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }}>Event</NavButton></Link> */}
                    <Link to='/inventory' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }}>Inventory</NavButton></Link>
                    <Link to='/contactus' style={linkDeco}> <NavButton sx={{ fontWeight: 'bold', }}>Contact us</NavButton></Link>
                    {role === 'ADMIN' && (
                        <NavButton onClick={signOut} sx={{ fontWeight: 'bold', }}>Sign out</NavButton>
                    )}

                </ButtonGroup>
            </Box>
        </AppBar>
    );
}