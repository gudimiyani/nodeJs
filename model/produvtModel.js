const mongoose = require('mongoose');

const login_model = new mongoose.Schema({
    id : {type : Number},
    title : {type : String},
    description : {type : String},
    price : {type : Number},
    discountPercentage : {type : Number},
    rating : {type : Number},
    stock : {type : Number},
    brand : {type : String},
    category : {type : String},
    thumbnail : {type : String},
    images : [
        {type : String},
        {type : String},
        {type : String},
        {type : String},
        {type : String},
    ]
});

const productModel = mongoose.model('products',login_model);

module.exports = productModel;