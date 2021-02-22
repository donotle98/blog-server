const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.post('/add-blog', async (req, res) => {
    console.log(
        req.body.language,
        req.body.title,
        req.body.snippet,
        req.body.body
    );
    const blog = new Blog({
        Language: req.body.language,
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body,
    });

    try {
        const post = await blog.save();
        res.json(post);
    } catch (e) {
        res.send('Error');
    }
});

router.get('/', (req, res) => {
    res.json('GETTING BLOGS');
});

router.get('/all-blogs', async (req, res) => {
    try {
        const data = await Blog.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
