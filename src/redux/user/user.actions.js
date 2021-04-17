// export a function which dispatches action to change currentUser in store
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});