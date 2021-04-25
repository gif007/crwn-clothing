// import createSelector function of reselect
import { createSelector } from 'reselect';


// get cart from state
const selectCart = state => state.cart;


// get cart items array from cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


// get hidden property of cart drop down
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);


// get total number of items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, current) => acc + current.quantity, 0)
);


// get total price from all cart items
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, current) => acc + current.price * current.quantity, 0)
)