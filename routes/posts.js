var express = require('express');
const { registerPost, singlePost, allPost, searchPost, limitSkipPost, postUserId, postComments, postUpdate, postDelete } = require('../controller/postController');
var router = express.Router();


router.post('/register',registerPost);
router.get('/single/:id',singlePost);
router.get('/',allPost);
router.get('/search',searchPost);
router.get('/limitskip',limitSkipPost);
router.get('/user/:id',postUserId);
router.get('/:id/comments',postComments);
router.post('/update/:id',postUpdate);
router.get('/delete/:id',postDelete);

module.exports = router;