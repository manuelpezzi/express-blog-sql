const express = require('express');

const router = express.Router();

const arreyPosts = ('../data/posts.js');

const { index, show, store, update, patch, destroy } = require('../controllers/postController.js');
//index
router.get('/', index)
//show
router.get('/:id', show);
//store
router.post('/', store);
//upadate
router.put('/:id', update);
//patch
router.patch('/:id', patch);
//delete
router.delete('/:id', destroy);


module.exports = router;