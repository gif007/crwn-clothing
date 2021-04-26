// import react library
import React from 'react';

// import styles
import './sign-in.styles.scss';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

// import auth api and signInWithGoogle pop up
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


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

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch(error) {
            console.log(error);
        } 
    };

    // update state with form input values
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    // returns the sign in form with google sign in button
    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            type='button'
                            isGoogleSignIn
                        >
                            Sign in with google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;