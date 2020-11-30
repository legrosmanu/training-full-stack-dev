const express = require('express');

// Middleware dependencies
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Defaults confiugraiton of the server
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

// Definitions of the routes
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// Provide a simple UI
app.use(express.static(__dirname + '/public'));

// Default behavior of the server, for example if the URL requested is unknown.
app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

// We start the server
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
