const express = require('express');
const router = express.Router();

const post = require('../controllers/Blog/posts');


// // create data route
// router.get('/api/getPosts', post.getPosts );
// // router.get('/api/getPost/:_id', post.getPost );

// router.put('/api/putPost/:_id', post.putPost );
// // router.put('/api/createPost/:_id', post.putPost );

// router.delete('/api/deletePost/:_id', post.deletePost );
// // router.post('/api/createPost', post.createPost);

// // router.post('/api/createFetch', post.createFetch);
// router.post('/api/newPost', post.newPost);

// // router.get('/api/postFilter/:slug/:_id', post.postFilter);
// router.get('/api/postFilter/:_id', post.postFilter);



router.post('/api/newPost', post.newPost);
router.get('/api/getPosts', post.getPosts );



module.exports = router;