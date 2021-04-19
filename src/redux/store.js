import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

// set up middlewares list
const middlewares = [logger];

// create store with rootReducer and middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persisted version of store
export const persistor = persistStore(store);