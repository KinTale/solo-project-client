import { Grid } from "@mui/material"
import UsefulLinks from "./useful-links"
import Donation from "./donation"

export default function Footer() {

    return (

        <Grid container
            align="center"
            sx={{ backgroundColor: 'primary.main' }}>

            <Grid item sm={3} lg={4}>{/* SPACE */}</Grid>

            <Grid item xs={12} sm={3}  lg={2} >
                <UsefulLinks />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}  >
                <Donation />
            </Grid>
            
            <Grid item sm={3} lg={4}>{/* SPACE */}</Grid>
        </Grid>
    )
}