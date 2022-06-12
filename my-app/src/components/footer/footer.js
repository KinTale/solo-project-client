import {  Grid } from "@mui/material"
import UsefulLinks from "./useful-links"
import Donation from "./donation"

export default function Footer() {

    return (

        <Grid container
            sx={{ backgroundColor: 'primary.main' }}>

            <Grid item sm={3}></Grid>
            <Grid item xs={12} sm={3}   >
                <UsefulLinks />
            </Grid>

            <Grid item xs={12} sm={3}   >
                <Donation />
            </Grid>
            <Grid item sm={3}></Grid>
        </Grid>
    )
}