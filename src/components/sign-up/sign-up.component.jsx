// import react library
import React from 'react';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

// import styled containers
import { SignUpContainer, TitleContainer } from './sign-up.styles';

import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

// returns a sign up component
class SignUp extends React.Component {

    // holds form values in own state
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // submits form values to firestore
    handleSubmit = (event) => {
        event.preventDefault();
        const { displayName, email, confirmPassword, password } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        signUpStart({ displayName, email, password });
    }

    // update state to hold current form input values
    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]:value});
    }

    // returns the sign up form
    render() {
        const { displayName, email, confirmPassword, password } = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userDetails) => dispatch(signUpStart(userDetails))
});

export default connect(null, mapDispatchToProps)(SignUp);