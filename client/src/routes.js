import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';

class Routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect from="/redirect" to="/about" />
        </Switch>
      </App>
    );
  }
}

export default Routes;

// ---------------------------------------------
// low level api to use with react-router-config like so:
//  <Router>
//    {renderRoutes(routes)}
//  </Router>
//
//
// export default [
//   {
//     path: '/',
//     component: App,
//     routes: [
//       {
//         path: '/home',
//         component: Home
//       },
//       {
//         path: '/about',
//         component: About
//       }
//     ]
//   }
// ]