// import react library
import React from 'react';

// import styles
import './checkout-item.styles.scss';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart actions to manipulate shop item quantity property
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';


// return a checkout item component with functions to increment and decrement quantity and remove item completely from cart
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div
                className='arrow'
                onClick={() => removeItem(cartItem)}
            >
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div
                className='arrow'
                onClick={() => addItem(cartItem)}
            >
                &#10095;
            </div>
        </span>
        <span className='price'>${price}</span>
        <div
            className='remove-button'
            onClick={() => clearItem(cartItem)}
        >
            &#10005;
        </div>
    </div>
)};


// passes in dispatch actions to increment, decrement or remove cart items
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);