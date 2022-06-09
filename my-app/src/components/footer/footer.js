import { Box, Grid, List, ListItem, ListItemText, ListItemButton, Typography, Link, Divider } from "@mui/material"
import UsefulLinks from "./useful-links"
import Donation from "./donation"

export default function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            minWidth: '105vw',
            ml: -5
        }}>
            <UsefulLinks/>
           <Donation/>
        </Box>
    )
}