import { UserActionTypes } from './user.types';

// export a function which dispatches action to change currentUser in store
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});