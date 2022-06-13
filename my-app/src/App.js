import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Main from './components/main-page/main';
import AboutUs from './components/about-us/about-us';
import ContactUs from './components/contact-us/contact-us';
import MembersList from './components/member/member-list';
import AddMember from './components/member/add-member';
import LogIn from './components/log-in/log-in';
import { Container, Grid, Box } from '@mui/material';
import '../src/app.css'
import { useState, useEffect } from 'react';
import storage from './ultis/storage';
import Inventory from './components/inventory/inventory';
import Event from './components/event/event';
import Footer from './components/footer/footer';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(storage.loadStorage())
  }, [])

  console.log('logged in ', loggedIn)
  if (loggedIn === null) {
    return <div className='App'></div>;
  }
  const gridStyle = {
    // justifyContent: 'center',
    // alignItem: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    ml: 'auto'
  }
  return (

    <Box >

      <Grid container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={gridStyle} >
        <Header />


        <NavBar role={loggedIn.role} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route>
            <Route path='/' element={<Main />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/members' element={<MembersList role={loggedIn.role} />} />
            <Route path='/inventory' element={<Inventory role={loggedIn.role} />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/login' element={<LogIn setLoggedIn={setLoggedIn} />} />
            <Route path='/addmember' element={<AddMember />} />
            <Route path='/event' element={<Event />} />
          </Route>
        </Routes>
    
          <Footer />



      </Grid>
    </Box>



  );
}


export default App;
