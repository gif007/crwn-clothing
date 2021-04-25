// get mock up data
import SHOP_DATA from './shop.data.js';


// initiate state to contain collections of shop items
const INITIAL_STATE = {
    collections: SHOP_DATA
};


// export a function which always returns the unmodified shop items
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;