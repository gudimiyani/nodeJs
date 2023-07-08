const productModel = require("../model/produvtModel")

const productRegister = async (req,res) => {
    const data = await productModel.create(req.body);
    res.status(200).json({
        status : "success",
        data
    })
}

const allProduct = async (req,res) => {
    const data = await productModel.find();
    res.status(200).json({
        status : "success",
        data
    })
}

const singleProduct = async (req,res) => {
    const id = req.params.id;
    const data = await productModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const searchProduct = async (req,res) => {
    const data = await productModel.find(req.query);
    res.status(200).json({
        status : "success",
        data
    })
}

const limitSkipProduct = async (req,res) => {
    const data = await productModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status : "success",
        data
    })
}

const singleField = async (req,res) => {
    const data = await productModel.find({},{"category" : 1 , "_id" : 0});
    res.status(200).json({
        status : "success",
        data
    })
}

const productCategory = async (req,res) => {
    const id = req.params.id;
    const data = await productModel.find({"category" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const updateProduct = async (req,res) => {
    const id = req.params.id;
    await productModel.updateOne({"id" : id},req.body);
    const data = await productModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const deleteProduct = async (req,res) => {
    const id = req.params.id;
    const data = await productModel.deleteOne({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

module.exports = {
    productRegister,
    allProduct,
    singleProduct,
    searchProduct,
    limitSkipProduct,
    singleField,
    productCategory,
    updateProduct,
    deleteProduct
}