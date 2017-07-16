import React from 'react'

export default (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>react is taking over the server</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
