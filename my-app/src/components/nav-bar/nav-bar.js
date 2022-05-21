import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/system'
import styled from '@emotion/styled';

export default function NavBar() {

    const NavButton = styled(Button)(({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.main
        }
    }))

    return (
        <Box
            sx={{
                backgroundColor: 'secondary.main',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup variant="text" aria-label="text button group">
                <NavButton >Home</NavButton>
                <NavButton >About us</NavButton>
                <NavButton >Members</NavButton>
                <NavButton >events</NavButton>
                <NavButton >contact us</NavButton>
            </ButtonGroup>
        </Box>
    );
}