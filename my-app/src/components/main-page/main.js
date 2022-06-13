import Slider from "./image-slider";
import AboutUsCard from "./card";
import { Grid } from "@mui/material";
export default function Main() {
    return (<>
        <Grid container direction='column' >

        {/* <Grid item sm={3} lg={4}/> */}

            <Grid item xs={12} sm={3}  lg={2}> <Slider /> </Grid>
            <Grid item xs={12} sm={3}  lg={2}> <AboutUsCard /> </Grid>
{/* 
            <Grid item sm={3} lg={4}/> */}

        </Grid>
    </>
    )
}