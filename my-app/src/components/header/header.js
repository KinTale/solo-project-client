import React from 'react';
import { Box } from '@mui/system'
import Logo from '../../images/Logo.png'

export default function Header() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'primary.main',
      
            }}
        >
            <img
                src={Logo}
                alt='logo'
               
            />
        </Box>
    )

}