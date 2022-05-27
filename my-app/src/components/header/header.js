import React from 'react';
import { Box } from '@mui/system'
import Logo from '../../images/Logo.png'

export default function Header() {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                minWidth: '105vw',
                ml: -5
            }}
        >
            <img
                src={Logo}
                alt='logo'
            />
        </Box>
    )

}