// import react library
import React from 'react';

// import styles
import './cart-item.styles.scss';


// returns a cart item component which displays shop item summary and quantity
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;