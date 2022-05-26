import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
export default function Address({ CardDetails }) {

    return (
        <CardDetails elevation={5}>
            <HomeIcon></HomeIcon>
            <Typography variant='h6'>Address: </Typography>  
            Buddhist Community Centre UK (BCCUK)  <br />
            8 High street, Aldershot <br />
            GU11 1TW  <br />

        </CardDetails >

    )
}