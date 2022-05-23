import { Box, Paper } from '@mui/material';
import styled from '@emotion/styled';
import Contact from './contact';
import Address from './address';
import Map from './map';

export default function ContactUs() {

    const CardDetails = styled(Paper)(({ theme }) => ({
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        width: 350,
        height: 200
    }))
    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5
    }
    const cardContainer = {
        display: 'flex',
        alignItems: 'center',
        mt: 5,
        gap: 5
    }
    return (
        <Box sx={container}>
            <Map />
            <Box sx={cardContainer}>
                <Address CardDetails={CardDetails} />
                <Contact CardDetails={CardDetails} />
            </Box>
        </Box>
    )
}