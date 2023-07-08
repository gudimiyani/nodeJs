var express = require('express');
const { commentRegister, allComments, singleComment, limitSkipComment, commentPostId, commentUpdate, commentDelete } = require('../controller/commentControll');
var router = express.Router();

router.post('/register',commentRegister);
router.get('/',allComments);
router.get('/single/:id',singleComment);
router.get('/limitskip',limitSkipComment);
router.get('/post/:id',commentPostId);
router.post('/update/:id',commentUpdate);
router.get('/delete/:id',commentDelete);

module.exports = router;