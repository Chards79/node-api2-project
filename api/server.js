const express = require('express');

const expressRouter = require('../hubs/express-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send({ api: 'up and running' });
});

server.use('/api/posts', expressRouter)

module.exports = server;