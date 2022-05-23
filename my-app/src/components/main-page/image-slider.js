import React from 'react'
import { Box } from '@mui/system'
import slider1 from '../../images/slider1.jpeg'
import slider2 from '../../images/slider2.jpeg'
import slider3 from '../../images/slider3.jpeg'
import { useState, useEffect } from 'react'
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './image-slider.css'

const pictures = [
    {
        label: 'picture-one',
        imgPath: slider1
    }
    , {
        label: 'picture-one',
        imgPath: slider2
    }, {
        label: 'picture-one',
        imgPath: slider3
    }
]

export default function Slider() {
    const [current, setcurrent] = useState(0)
    const autoSlide = true
    const intervalTime = 4000
    let slideInterval

    const nextSlide = () => {
        setcurrent(current === pictures.length - 1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setcurrent(current === 0 ? pictures.length - 1 : current - 1)
    }

    const auto = () => {
        return slideInterval = setInterval(nextSlide, intervalTime)
    }
    useEffect(() => {
        if (autoSlide) { auto() }
        return () => clearInterval(slideInterval)
    }, [current])

    const sliderButton = {
        position: 'relative',
        color: 'white',
        bgcolor: 'rgba(0, 0, 0, .295)',
        boxShadow: 0,
        borderRadius: 1,
        top: 205,
        left: 750,
        ":hover": {
            bgcolor: 'rgba(0, 0, 0, .595)'
        }
    }

    const sliderContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const imageStyle = {
        height: 450,
        width: 750,
        display: "block"
    }
    return (
        <Box sx={sliderContainer}>

            <IconButton onClick={previousSlide} sx={sliderButton}> <ChevronLeftIcon /></IconButton>
            <IconButton onClick={nextSlide} sx={sliderButton}>  <ChevronRightIcon /></IconButton>

            {pictures.map((picture, index) => {
                return (
                    <div className={index === current ? 'current-slide' : 'slide'} key={index}>
                        {index === current && (<img src={picture.imgPath}
                            alt={picture.label}
                            style={imageStyle} />
                        )}
                    </div>
                )
            })}
        </Box>
    )
}