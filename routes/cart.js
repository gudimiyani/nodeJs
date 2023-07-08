var express = require('express');
const { cartRegister, singleCart, cartUser, cartDelete, cartUpdate, allCart } = require('../controller/cartController');
var router = express.Router();

router.post('/register',cartRegister);
router.get('/',allCart);
router.get('/single/:id',singleCart);
router.get('/user/:id',cartUser);
router.get('/delete/:id',cartDelete);
router.post('/update/:id',cartUpdate);

module.exports = router;