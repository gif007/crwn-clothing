// import store creation tools from redux
import { createStore, applyMiddleware } from 'redux';

// get the redux logger
import logger from 'redux-logger';

// import the root reducer
import rootReducer from './root-reducer';

// import the persistStore method of redux
import { persistStore } from 'redux-persist';

// initiate middlewares array
const middlewares = [];


// add middlewares only in development environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// create store with rootReducer and middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persisted version of store
export const persistor = persistStore(store);