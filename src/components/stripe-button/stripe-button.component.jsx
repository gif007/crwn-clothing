import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IjXKlFwy2cXj39XGDeafKU8HJxilbqUUYO7HwBq6ByLHcREOAxDG8Sd16aweXKkfbbaRMFraNmNXYrTzVEQ8WtK00eGbeLv7R';

    const onToken = token => {
        console.log(token);
        alert('Success');
    };

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