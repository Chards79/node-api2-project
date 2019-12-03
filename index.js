const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send({ api: 'up and running' });
});







const port = 3000;
server.listen(port, () => {
    console.log(`\n ** API running on port ${port} **\n`)
});