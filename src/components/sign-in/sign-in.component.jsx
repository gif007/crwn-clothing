// import react library
import React from 'react';

// import styled containers
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { connect } from 'react-redux';


// returns a sign in component 
class SignIn extends React.Component {

    // keeps values of form inputs in own state
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    // takes current form values and checks them against firebase auth api
    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

        this.setState({ email: '', password: '' });


    };

    // update state with form input values
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    // returns the sign in form with google sign in button
    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);