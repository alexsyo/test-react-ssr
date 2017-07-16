import React from 'react'
import App from '../client/src/App'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import renderInitialPage from './renderInitialPage'
import storeCreator from '../client/src/redux/storeCreator'
import routes from '../client/src/routes'

// react-router context
const context = {};
const store = storeCreator();

export default (req, res) => {
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider> )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // const requests = matchRoutes(routes, req.url)
  //   .map(({route, match}) => {
  //     return route.component.loadData
  //       ? router.component.loadData(match)
  //       : Promise.resolve(null)
  //   })

  // Promise.all(requests)
  //   .then((data) => {
  //     res.send(renderInitialPage(html, preloadedState))
  //   })

  res.send(renderInitialPage(html, preloadedState))

  //if(context.url) {
  //  console.log(context);
  //  res.writeHead(301, {
  //    Location: context.url
  //  })
  //  res.end()
  //} else {
  //  // Send the rendered page back to the client
  //  res.write(renderInitialPage(html, preloadedState))
  //  res.end()
  //}
}

