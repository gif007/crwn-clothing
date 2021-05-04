// import react library
import React from 'react';

// import styled container
import { CustomButtonContainer } from './custom-button.styles';


// returns a button with default custom-button styling and optional google-sign-in and inverted properties
const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;