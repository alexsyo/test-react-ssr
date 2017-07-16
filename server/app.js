import path from 'path'
import Express from 'express'
import handleRender from './handleRender';
import http from 'spdy';
import fs from 'fs';

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('client/dist'))

// api routes
app.get('/api/pizza', (req, res) => res.send('margerita'))
app.get('/api/pasta', (req, res) => res.send('carbonara'))
app.get('/api/ice-cream', (req, res) => res.send('strawberry'))

// app route
app.get('*', handleRender)

// self signed certificate using simplehttp2server
const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
}

// testing spdy protocol
http.createServer(options, app).listen(port)
