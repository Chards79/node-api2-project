const server = require('./api/server');

const port = 3000;
server.listen(port, () => {
    console.log(`\n ** API running on port ${port} **\n`)
});