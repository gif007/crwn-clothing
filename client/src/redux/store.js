// import store creation tools from redux
import { createStore, applyMiddleware } from 'redux';

// get the redux logger
import logger from 'redux-logger';

// import the root reducer
import rootReducer from './root-reducer';

// import the persistStore method of redux
import { persistStore } from 'redux-persist';

// import saga middleware from redux
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';


// instantiate saga middleware without options
const sagaMiddleware = createSagaMiddleware();

// initiate middlewares array
const middlewares = [sagaMiddleware];


// add middlewares only in development environment
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// create store with rootReducer and middlewares
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// populate saga middleware with individual sagas
sagaMiddleware.run(rootSaga);

// create persisted version of store
export const persistor = persistStore(store);