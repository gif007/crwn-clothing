// import react library
import React, { useState } from 'react';

// import styled containers
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux';


// returns a sign in component 
const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    // takes current form values and checks them against firebase auth api
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    // update state with form input values
    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    // returns the sign in form with google sign in button
    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    label='password'
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <ButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton
                        onClick={googleSignInStart}
                        type='button'
                        isGoogleSignIn
                    >
                        Sign in with google
                    </CustomButton>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);