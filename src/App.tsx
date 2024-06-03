import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Album from './pages/Album';
import Uploads from './pages/Uploads';
import { SignUp, useAuth } from '@clerk/clerk-react';
import SignInPage from './components/SignInPage';
import Download from './pages/Download';

function App() {

  const {userId,isLoaded,isSignedIn} = useAuth()

  return (
    <MainDiv>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ isSignedIn ?<Home/> : <SignInPage/> } />
          <Route path='/album' element={ isSignedIn? <Album/> : <SignInPage/>}/>
          <Route path='/upload' element={ isSignedIn ?<Uploads/> : <SignInPage/>}/>
          <Route path='/download/:id' element={ isSignedIn ?<Download/> : <SignInPage/>}/>
        </Routes>
      </BrowserRouter>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  
`

export default App;
