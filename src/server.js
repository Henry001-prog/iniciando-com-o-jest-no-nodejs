const express = require('express');
const server = express();

server.use(express.json());

const routes = require('./routes');
server.use('/api', routes);

const port = 8080;

server.listen(port);

module.exports = server;