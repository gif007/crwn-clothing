// import user action types
import { UserActionTypes } from './user.types';

// initialize state of currentUser
const INITIAL_STATE = {
    currentUser: null
};

// reducer which responds to actions which set the currentUser in the store
const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;