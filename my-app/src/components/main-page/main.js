import Slider from "./image-slider";
import BasicCard from "./card";
import { Box } from "@mui/system";


export default function Main() {
    const aboutUsContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 15
    }
    return (
        <Box sx={aboutUsContainer} >
            <Slider />
            <BasicCard />
        </Box>

    )
}