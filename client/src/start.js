import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import storeCreator from './redux/storeCreator';
//import style from './sass/main.scss';
import html from './index.html';
import routes from './routes';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
const store = storeCreator(preloadedState);

render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('app')
);

