import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Slider from './components/slider/image-slider'
import { Container } from '@mui/material';

function App() {
  return (

    <>
      <Container>
        <Box>
          <Header />
          <NavBar />
          <Slider />
        </Box>
      </Container>
    </>

  );
}

export default App;
