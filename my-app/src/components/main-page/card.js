import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AboutUsOne from '../about-us/about-us-p1';
import { Link } from 'react-router-dom';

export default function BasicCard() {
  const aboutUsContainer = {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    flexWrap:'wrap',
    // maxWidth: 750,
    m: 'auto',
    p: 5,
    backgroundColor: 'background.paper',
    color: 'primary.main',
    maxWidth: 750,
 
   flex:1
  }
 
  return (
    <Box sx={aboutUsContainer}>
      <AboutUsOne />
      <Box >
        <Link to='/aboutus' style={{ textDecorationColor: '#5B0111' }}>
          <Button size="small">Learn More</Button></Link>
      </Box>
    </Box>

  );
}
