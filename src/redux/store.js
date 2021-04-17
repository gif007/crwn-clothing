import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// set up middlewares list
const middlewares = [logger];

// create store with rootReducer and middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//export store
export default store;