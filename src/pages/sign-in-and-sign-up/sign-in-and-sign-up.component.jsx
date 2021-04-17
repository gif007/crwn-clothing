import React from 'react';
import './sign-in-and-sign-up.styles.scss';
// import SignIn and SignUp components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// return a div containing both the SignIn and SignUp components side by side
const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;