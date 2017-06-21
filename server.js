const express = require('express')
const moviesRouter = require('./routes/movies');
const bodyParser = require('body-parser');

// Create server
const server = express()

//Add routes
server.use(moviesRouter)

//Start on localhost 7000
const port = 7000
server.listen((port), () => {
  console.log(`Start on localhost:${port}`);
})
