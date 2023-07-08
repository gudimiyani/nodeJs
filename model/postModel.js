const mongoose = require('mongoose');

const login_Model = new mongoose.Schema({
        id : {type : Number},
        title : {type : String},
        body : {type : String},
        userId : {type : Number},
        tags : [
                {type : String},
                {type : String},
                {type : String}  
        ],
        reactions : {type : Number},
});

const postModel = mongoose.model('post',login_Model);

module.exports = postModel;