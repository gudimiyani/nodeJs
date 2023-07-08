var express = require('express');
const { productRegister, allProduct, singleProduct, searchProduct, limitSkipProduct, singleField, productCategory, updateProduct, deleteProduct } = require('../controller/productControl');
var router = express.Router();

router.post('/register',productRegister);
router.get('/',allProduct);
router.get('/single/:id',singleProduct);
router.get('/search',searchProduct);
router.get('/limitskip',limitSkipProduct);
router.get('/categories',singleField);
router.get('/category/:id',productCategory);
router.post('/update/:id',updateProduct);
router.get('/delete/:id',deleteProduct);


module.exports = router;