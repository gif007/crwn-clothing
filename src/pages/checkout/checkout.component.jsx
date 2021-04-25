// import react library
import React from 'react';

// import styles
import './checkout.styles.scss';

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
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>
            <div className='header-block'>
                <span>description</span>
            </div>
            <div className='header-block'>
                <span>quantity</span>
            </div>
            <div className='header-block'>
                <span>price</span>
            </div>
            <div className='header-block'>
                <span>remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
 
        ))}

        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
        <div className='test-warning'>
            *Test Card*
            <br />
            4242 4242 4242 4242 cvv123 exp01/22
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
);


// get the cart items array and cart total and pass to checkout page
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(CheckoutPage);