import { createStore } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const storeCreator = (state = {}) =>
  createStore(reducers, state, composeWithDevTools(middlewares));

export default storeCreator;