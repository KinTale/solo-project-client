import React from 'react'
import { Box  } from '@mui/material'
import AboutUs1 from '../../images/about-us-1.jpeg'
import AboutUs2 from '../../images/about-us-2.jpeg'
import AboutUsOne from './about-us-p1';
import AboutUsTwo from './about-us-p2';

export default function AboutUs() {

    const paperStyle = {
        maxWidth: 800,
        backgroundColor: 'background.paper',
        padding: 5,
        color: 'primary.main',
        fontSize: '2rem'
    }
    const aboutUsContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 12,
    }
    return (
        <Box sx={aboutUsContainer}>

            <img src={AboutUs1} alt='three buddhas' style={{
                maxWidth: 800,

            }} />

            <Box sx={paperStyle} >
                <AboutUsOne />
                <img src={AboutUs2} alt='rinpoche' style={{
                    height: 250,
                    width: 350,
                    padding: 10
                }} />
                <AboutUsTwo />
            </Box>
        </Box>
    )
}