// import react library
import React from 'react';

// import styled containers
import { CartItemContainer, ItemImageContainer, ItemDetailsContainer, ItemDetailValueContainer } from './cart-item.styles';


// returns a cart item component which displays shop item summary and quantity
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ItemImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <ItemDetailValueContainer>{name}</ItemDetailValueContainer>
            <ItemDetailValueContainer>{quantity} x ${price}</ItemDetailValueContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;