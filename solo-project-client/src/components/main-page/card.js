import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AboutUsOne from '../about-us/about-us-p1';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
export default function BasicCard() {
  const aboutUsContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const aboutUsChildren = {
    p: 5,
    ml: 10,
    width: 750,
    backgroundColor: 'background.paper',
    color: 'primary.main',

  }
  return (
    <Box sx={aboutUsContainer}>
      <Paper sx={aboutUsChildren }>
        <AboutUsOne />
        <Box >
          <Link to='/aboutus' style={{ textDecorationColor: '#5B0111' }}>
            <Button size="small">Learn More</Button></Link>
        </Box>
      </Paper>
    </Box>

  );
}
