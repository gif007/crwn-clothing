// import action types
import ShopActionsTypes from './shop.types'


// initiate state to contain collections of shop items
const INITIAL_STATE = {
    collections: null
};


// updates shop reducer to hold data from firestore
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;