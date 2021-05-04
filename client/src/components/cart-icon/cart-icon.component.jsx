// import react library
import React from 'react';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart hidden toggle dispatch action
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import styled containers
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

// import cart items count selector
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';


// returns a cart icon which displays total cart item count and toggles cart dropdown when clicked
const CartIcon = ({ toggleCartHidden, totalCount }) => (
    <CartIconContainer onClick={ toggleCartHidden }>
        <ShoppingIconContainer />
        <ItemCountContainer>{totalCount}</ItemCountContainer>
    </CartIconContainer>
);


// passes in dispatch action to toggle cart dropdown
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


// gets total item count of cart
const mapStateToProps = createStructuredSelector({
    totalCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);