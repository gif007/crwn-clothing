// import react library
import React from 'react';

// import form inputs with shrinkable labels
import FormInput from '../form-input/form-input.component';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

// import firebase auth api and createUserProfileDocument function to manage user profiles in firestore
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// import styles
import './sign-up.styles.scss';


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
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, confirmPassword, password } = this.state;

        // check for password mismatch
        if (password!== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // attempt to create a firestore document representing user 
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            // wipe form on successful profile creation
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error);
        }
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
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
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
            </div>
        )
    }
}

export default SignUp;