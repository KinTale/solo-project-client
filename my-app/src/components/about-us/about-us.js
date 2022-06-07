import React from 'react'
import { Box ,Paper } from '@mui/material'
import AboutUs1 from '../../images/about-us-1.jpeg'
import AboutUs2 from '../../images/about-us-2.jpeg'
import AboutUsOne from './about-us-p1';
import AboutUsTwo from './about-us-p2';

export default function AboutUs() {

    const paperStyle = {
        width: 800,
        mb: 10,
        backgroundColor: 'background.paper',
        padding: 5,
        color: 'primary.main',
        fontSize: '2rem'
    }
    const aboutUsContainer = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    return (
        <Box sx={aboutUsContainer}>

            <img src={AboutUs1} alt='three buddhas' style={{
                maxWidth: 800
            }} />

            <Paper elevation={3} sx={paperStyle} >
                <AboutUsOne />
                <img src={AboutUs2} alt='rinpoche' style={{
                    height: 250,
                    width: 350,
                    padding: 10
                }} />
                <AboutUsTwo />
            </Paper>
        </Box>
    )
}