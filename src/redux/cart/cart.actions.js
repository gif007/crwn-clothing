// import types of actions
import { CartActionTypes } from './cart.types';

// export a function which dispatches action to change currentUser in store
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// function to add items incrementally to cart
export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

// function to remove an item category from cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CARD,
    payload: item
});

// function to decrement item count in cart
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});