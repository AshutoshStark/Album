import React from 'react'
import styled from 'styled-components'
import { Link, useLocation} from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {

  const {pathname} = useLocation();

  return (
    <MainDiv>
      <Heading>
        ALBUM
      </Heading>
        <nav>
           <Link to={'/'} className={pathname === '/' ? "activeLink" : "notActiveLink"}>
            Home
           </Link>
           <Link to={'/album'} className={pathname.includes('album') ? "activeLink" : "notActiveLink"}>
            Album
           </Link>
           <Link to={'/upload'} className={pathname.includes('upload') ? "activeLink" : "notActiveLink"}>
            Upload
           </Link> 
        </nav>
        <UserButton/>
    </MainDiv>
  )
}

const Heading = styled.h1`
  color: #b9e202;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const MainDiv = styled.div`
height: 10vh;
width: 100vw;
display: flex;
align-items: center;
@media screen and (max-width: 900px) {
  overflow: hidden;
  justify-content: space-around;
  }
nav{
  width: 80vw;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    width: 60vw;
    gap: 1rem;
  }
}
a{
  text-decoration:none;
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}
.activeLink{
  color:#bee800 ;
  border-bottom: solid 2px #c5f003;
}
.notActiveLink{
  color:white;
}


`

export default Navbar
