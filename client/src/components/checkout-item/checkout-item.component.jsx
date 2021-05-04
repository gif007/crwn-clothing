// import react library
import React from 'react';

// import styled containers
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer,
    CheckoutItemImageWrapper,
    CheckoutItemNameContainer,
    CheckoutItemPriceContainer,
    CheckoutItemQuantityContainer,
    CheckoutItemQuantityValueContainer,
    ArrowContainer,
    RemoveButtonContainer
} from './checkout-item.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart actions to manipulate shop item quantity property
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';


// return a checkout item component with functions to increment and decrement quantity and remove item completely from cart
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <CheckoutItemContainer>
        <CheckoutItemImageContainer>
            <CheckoutItemImageWrapper src={imageUrl} alt='item' />
        </CheckoutItemImageContainer>
        <CheckoutItemNameContainer>{name}</CheckoutItemNameContainer>
        <CheckoutItemQuantityContainer>
            <ArrowContainer onClick={() => removeItem(cartItem)}>
                &#10094;
            </ArrowContainer>
            <CheckoutItemQuantityValueContainer>{quantity}</CheckoutItemQuantityValueContainer>
            <ArrowContainer onClick={() => addItem(cartItem)}>
                &#10095;
            </ArrowContainer>
        </CheckoutItemQuantityContainer>
        <CheckoutItemPriceContainer>${price}</CheckoutItemPriceContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
            &#10005;
        </RemoveButtonContainer>
    </CheckoutItemContainer>
)};


// passes in dispatch actions to increment, decrement or remove cart items
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);