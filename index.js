const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send({ api: 'up and running' });
});

// POST to /api/posts

server.post('/api/posts', (req, res) => {
    const data = req.body;

    if (data.title && data.contents) {
        db.insert(data)
            .then(posts => {
                res.status(201).json({ ...posts, ...data })
            })
            .catch(error => {
                console.log('error on POST for posts', error);
                res.status(500).json({ error: 'There was an error while saving the post to the database' })
            })
    } else {
        res.status(400).json({ errorMessage: 'Please provide title and contents for the post' })
    }
})

// POST to /api/posts/:id/comments

server.post('/api/posts/:id/comments', (req, res) => {

})

// GET to /api/posts

server.get('/api/posts', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log('error on get for all posts', error);
            res.status(500).json({ error: 'The posts information could not be retrieved' })
        })
})

// GET to /api/posts/:id



// GET to /api/posts/:id/comments


// DELETE to /api/posts/:id


// PUT to /api/posts/:id





const port = 3000;
server.listen(port, () => {
    console.log(`\n ** API running on port ${port} **\n`)
});