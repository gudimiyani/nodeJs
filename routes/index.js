var express = require('express');
const { enterData, userLogin, allUsers, singleData, searchData, limitSkipUser, userIdCart, userIdPosts, userIdTodos, userUpdate, userDelete } = require('../controller/userControl');
const { userAuth } = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.post('/register', enterData);
router.get('/',userLogin);
router.get('/users',userAuth, allUsers);
router.get('/users/:id',singleData);
router.get('/user/search',searchData);
router.get('/user',limitSkipUser);
router.get('/user/:id/carts',userIdCart);
router.get('/user/:id/posts',userIdPosts);
router.get('/user/:id/todos',userIdTodos);
router.post('/user/update/:id',userUpdate);
router.get('/user/delete/:id',userDelete);

module.exports = router;
