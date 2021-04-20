// import individual reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
// import combineReducers function
import { combineReducers } from 'redux';
// import local store persistence tools
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// create config object for state persistence
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

// create rootReducer object
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

// returns an object which contains references to all individual reducers
export default persistReducer(persistConfig, rootReducer);