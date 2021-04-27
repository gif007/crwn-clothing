// import react library
import React from 'react';

// import styled containers
import { SignInAndSignUpPageContainer } from './sign-in-and-sign-up.styles';

// import SignIn and SignUp components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// return a div containing both the SignIn and SignUp components side by side
const SignInAndSignUpPage = () => (
    <SignInAndSignUpPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpPageContainer>
)

export default SignInAndSignUpPage;