const express = require('express');

const router = express.Router();

const Db = require('../hubs/db');

router.use(express.json());

router.get('/', (req, res) => {
    Db.find(req.query)
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the hubs' })
        })
})

// POST to /api/posts

router.post('/api/posts', (req, res) => {
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

router.post('/api/posts/:id/comments', (req, res) => {

})

// GET to /api/posts

router.get('/api/posts', (req, res) => {
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

router.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    if (id === id) {
        db.findById(id)
            .then(posts => {
                res.status(200).json(posts);
            })
            .catch(error => {
                console.log('error on get post by id', error);
                res.status(500).json({ error: 'The post information could not be retrieved' })
            })
    } else {
        res.status(404).json({ errorMessage: 'The post with the specified ID does not exist' })
    }
})

// GET to /api/posts/:id/comments

router.get('/api/posts/:id/comments', (req, res) => {
    const id = req.params.id;

    if (id === id) {
        db.findCommentById(id)
            .then(posts => {
                res.status(200).json(posts);
            })
            .catch(error => {
                console.log('error on get post by id', error);
                res.status(500).json({ error: 'The comments information could not be retrieved' })
            })
    } else {
        res.status(404).json({ errorMessage: 'The post with the specified ID does not exist' })
    }
})

// DELETE to /api/posts/:id

router.delete('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'post removed successfully', removed })
            } else {
                res.status(404).json({ message: 'The post with the specified ID does not exist' })
            }
        })
        .catch(error => {
            console.log('error on DELETE /api/posts/:id', error);
            res.status(500).json({ errorMessage: 'The post with the specified ID does not exist' })
        })
})

// PUT to /api/posts/:id


module.exports = router;