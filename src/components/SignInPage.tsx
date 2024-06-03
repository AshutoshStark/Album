import { SignIn, useAuth } from '@clerk/clerk-react'
import React from 'react'
import styled from 'styled-components'
import Home from '../pages/Home'

const SignInPage = () => {

    const {isSignedIn} = useAuth()

  return (
    <MainDiv>
        {
            isSignedIn?<SignIn/> : <Home/>
        }
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default SignInPage
