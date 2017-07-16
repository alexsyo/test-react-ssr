import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';

const reducers = combineReducers({
    api: apiReducer,
});

export default reducers;
