import { Typography } from '@mui/material';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';

export default function Address({ CardDetails }) {
    return (
        <CardDetails elevation={5}>
            <TempleBuddhistIcon/>
            <Typography variant='h6'>Address: </Typography>  
            Buddhist Community Centre UK (BCCUK)  <br />
            8 High street, Aldershot <br />
            GU11 1TW  <br />
        </CardDetails >
    )
}