import App from './App';
import Home from './components/Home';
import About from './components/About';

export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  }
]
