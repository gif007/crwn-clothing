// import react library
import React, { useState } from 'react';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

// import styled containers
import { SignUpContainer, TitleContainer } from './sign-up.styles';

import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

// returns a sign up component
const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    });

    const { email, password, confirmPassword, displayName } = userCredentials;

    // submits form values to firestore
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({ displayName, email, password });
    }

    // update state to hold current form input values
    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserCredentials({ ...userCredentials, [name]:value});
    }

    // returns the sign up form
    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userDetails) => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);