import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Main from './components/main-page/main';
import AboutUs from './components/about-us/about-us';
import ContactUs from './components/contact-us/contact-us';
import MembersList from './components/member/member-list';
import LogIn from './components/log-in/log-in';
import { Container } from '@mui/material';
import '../src/app.css'
function App() {
  return (

    <>
      <Container className='app'>
        <Header />
        <NavBar />
        <Routes>
          <Route>
            <Route path='/' element={<Main />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/members' element={<MembersList />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/login' element={<LogIn />} />
          </Route>
        </Routes>
      </Container>
    </>

  );
}


export default App;
