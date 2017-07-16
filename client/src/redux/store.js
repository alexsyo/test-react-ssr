import { createStore } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(reducers, preloadedState, composeWithDevTools(middlewares));

export default store;