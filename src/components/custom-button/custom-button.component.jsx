// import react library
import React from 'react';
// import styles
import './custom-button.styles.scss';


// returns a button with default custom-button styling and optional google-sign-in and inverted properties
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className={`${ inverted ? 'inverted' : '' }${
            isGoogleSignIn ? 'google-sign-in': ''
            } custom-button`}
            {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;