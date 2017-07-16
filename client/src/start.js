import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import store from './redux/store';
//import style from './sass/main.scss';
import html from './index.html';
import routes from './routes';

render(
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>,
  document.getElementById('app')
);

