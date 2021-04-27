// import react library
import React from 'react';

// import cart item view component for drop down
import CartItem from '../cart-item/cart-item.component';

// import styled containers
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CheckoutButtonWrapper } from './cart-dropdown.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart items array selector
import { selectCartItems } from '../../redux/cart/cart.selectors';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';

// import withRouter HoC from react router to gain access to router props
import { withRouter } from 'react-router-dom';

// import cart hidden toggle dispatch action
import { toggleCartHidden } from '../../redux/cart/cart.actions'


// returns a cart dropdown component which renders all current cart items and a checkout page button
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CheckoutButtonWrapper onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CheckoutButtonWrapper>
    </CartDropdownContainer>
);


// get cart items array
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// connect to state with redux then connect to router to gain access to browser history
export default withRouter(connect(mapStateToProps)(CartDropdown));