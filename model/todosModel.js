const mongoose = require('mongoose');

const login_Model = new mongoose.Schema({
    id : {type : Number},
    todo : {type : String},
    completed : {type : Boolean},
    userId : {type : Number}
})

const todoModel = mongoose.model('todos',login_Model);

module.exports = todoModel