// import react library
import React from 'react';

// import styles
import './form-input.styles.scss';


// returns a grouped label and input element with an on change function and shrinkable label text
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;