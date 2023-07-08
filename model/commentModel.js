const mongoose = require('mongoose');

const login_Model = new mongoose.Schema({
        id : {type : Number},
        body : {type : String},
        postId : {type : Number},
        user : {
                id : {type : Number}, 
                username : {type : String}
        }
})

const commentModel = mongoose.model('comments',login_Model);

module.exports = commentModel