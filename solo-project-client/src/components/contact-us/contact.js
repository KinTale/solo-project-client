import { Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Contact({ CardDetails }) {

    
    return (
        <CardDetails elevation={5}>
            <ContactPhoneIcon></ContactPhoneIcon>
            <Typography variant='h6'>Contacts: </Typography>
            Telephone: 99999999999  <br />
            Mobile: 777777777  <br />
            Email: test@email.com  <br />
        </CardDetails >

    )
}