import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/header/header';
import NavBar from './components/nav-bar/nav-bar';
import Main from './components/main-page/main';
import AboutUs from './components/about-us/about-us';
import ContactUs from './components/contact-us/contact-us';
import MembersList from './components/member/member-list';
import AddMember from './components/member/add-member';
import LogIn from './components/log-in/log-in';
import { Container } from '@mui/material';
import '../src/app.css'
import { useState, useEffect } from 'react';
import storage from './ultis/storage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(storage.loadStorage())
  }, [])

  console.log('logged in ', loggedIn)
  if (loggedIn === null) {
    return <div className='App'></div>;
  }

  return (

    <>
      <Container className='app'>
        <Header />
        <NavBar role={loggedIn.role} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route>
            <Route path='/' element={<Main />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/members' element={<MembersList role={loggedIn.role}/>} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/login' element={<LogIn setLoggedIn={setLoggedIn}/>} />
            <Route path='/addmember' element={ <AddMember />}/>
          </Route>
        </Routes>
      </Container>
    </>

  );
}


export default App;
