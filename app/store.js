import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware.withExtraArgument(axios),
      // `withExtraArgument` gives access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      loggingMiddleware
    )
  )
);
