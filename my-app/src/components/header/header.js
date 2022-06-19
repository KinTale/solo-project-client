import React from 'react';
import { Box } from '@mui/system'
import Logo from '../../images/Logo.png'
import { Typography } from '@mui/material';
export default function Header() {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'primary.main',
                width: '110vw',
                minWidth: 650
            }}
        >
            <img
                src={Logo}
                alt='logo'
            />
            <Typography variant='h4' >The Buddhist Community Center UK </Typography>
            <Typography>  &nbsp;</Typography>
            <Typography variant='h4' >London Branch</Typography>
        </Box>
    )

}