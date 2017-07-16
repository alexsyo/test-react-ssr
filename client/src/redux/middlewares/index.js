import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import errorMiddleware from './errorMiddleware.js';

const middlewares = applyMiddleware(
    thunk,
    //logger(),
    errorMiddleware
);

export default middlewares;
