// import react library
import React from 'react';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart hidden toggle dispatch action
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// import shopping bag icon as a react component named ShoppingIcon
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import styles
import './cart-icon.styles.scss';

// import cart items count selector
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';


// returns a cart icon which displays total cart item count and toggles cart dropdown when clicked
const CartIcon = ({ toggleCartHidden, totalCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{totalCount}</span>
    </div>
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