// import react library
import React from 'react';

// import stripecheckout component of react stripe checkout library
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';


// returns a checkout popup with cart total
const StripeCheckoutButton = ({ price }) => {
    // convert price into cents
    const priceForStripe = price * 100;
    // stripe test key
    const publishableKey = 'pk_test_51IjXKlFwy2cXj39XGDeafKU8HJxilbqUUYO7HwBq6ByLHcREOAxDG8Sd16aweXKkfbbaRMFraNmNXYrTzVEQ8WtK00eGbeLv7R';

    // callback function on successful payment
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please use the test credit card.');
        })
    };

    // returns a button which launches stripe checkout popup
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN CLOTHING'
            billingAddress
            shippingAddress
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
    };

export default StripeCheckoutButton;