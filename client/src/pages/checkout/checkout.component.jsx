// import react library
import React from 'react';

// import styled containers
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    CartTotalContainer,
    TestWarning,
    StripeCheckoutButtonWrapper
} from './checkout.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';

// import selectors for cart items array and cart total
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';

// import checkout item view component
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// import stripe checkout button
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';



// return a checkout page which presents current items in cart array, overall total and the stripe checkout button
const CheckoutPage = ({ cartItems, cartTotal }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
 
        ))}

        <CartTotalContainer>
            <span>TOTAL: ${cartTotal}</span>
        </CartTotalContainer>
        <TestWarning>
            *Test Card*
            <br />
            4242 4242 4242 4242 cvv123 exp01/22
        </TestWarning>
        <StripeCheckoutButtonWrapper>
            <StripeCheckoutButton price={cartTotal} />
        </StripeCheckoutButtonWrapper>
        
    </CheckoutPageContainer>
);


// get the cart items array and cart total and pass to checkout page
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(CheckoutPage);