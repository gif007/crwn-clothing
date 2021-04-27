// import react library
import React from 'react';

// import styled containers
import { FormInputGroup, FormInputContainer, FormInputLabelContainer } from './form-input.styles';


// returns a grouped label and input element with an on change function and shrinkable label text
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormInputGroup>
        <FormInputContainer onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<FormInputLabelContainer {...otherProps}>
                {label}
            </FormInputLabelContainer>)
            : null
        }
    </FormInputGroup>
)

export default FormInput;