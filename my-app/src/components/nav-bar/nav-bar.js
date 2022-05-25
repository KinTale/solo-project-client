import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/system'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const NavButton = styled(Button)(({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main
        }
    }))
    const linkDeco = { textDecoration: 'none' }

    const buttonContainer = {
        backgroundColor: 'secondary.main',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            m: 0.5,
            textDecoration: '',
        },
    }
    return (
        <Box sx={buttonContainer}>
            <ButtonGroup variant="string" >
                <Link to='/' style={linkDeco}> <NavButton   >Home</NavButton></Link>
                <Link to='/aboutus' style={linkDeco}> <NavButton >About us</NavButton></Link>
                <Link to='/members' style={linkDeco}> <NavButton >Members</NavButton></Link>
                {/* <NavButton >events</NavButton> */}
                <Link to='/contactus' style={linkDeco}> <NavButton >contact us</NavButton></Link>
            </ButtonGroup>
        </Box>
    );
}