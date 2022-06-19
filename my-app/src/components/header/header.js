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
                backgroundColor: 'primary.main',
                width: '100vw',
                minWidth:750
            }}
        >
            {/* <img
                src={Logo}
                alt='logo'
            /> */}
            <Typography variant='h2' >The Buddhist Community Center UK London Branch</Typography>
        </Box>
    )

}