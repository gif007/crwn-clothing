import { CartActionTypes } from './cart.types';

// export a function which dispatches action to change currentUser in store
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});