var express = require('express');
const { todoRegister, singleTodo, allTodo, randomTodo, lmitSkipTodo, updateTodo, deleteTodo } = require('../controller/todosController');
var router = express.Router();

router.post('/register',todoRegister);
router.get('/single/:id',singleTodo);
router.get('/',allTodo);
router.get('/random',randomTodo);
router.get('/limitskip',lmitSkipTodo);
router.post('/update/:id',updateTodo);
router.get('/delete/:id',deleteTodo);

module.exports = router