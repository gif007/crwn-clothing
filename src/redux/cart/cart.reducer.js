// import all actions types
import { CartActionTypes } from './cart.types';
// import helper functions from utilities
import { addItemToCart, removeItemFromCart } from './cart.utils';


// set initial state containing hidden property for cart drop down and array of cart items
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


// return either a newly created state object or current state
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: // changes hidden property on drop down
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: // adds item incrementally
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CARD: // removes item totally
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        case CartActionTypes.REMOVE_ITEM: // removes item decremental
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        default :
            return state; // return current state
    }
};

export default cartReducer;