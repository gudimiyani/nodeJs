const cartModel = require("../model/cartModel");

const cartRegister = async (req,res) => {
    const data = await cartModel.create(req.body);
    res.status(200).json({
        status : "success",
        data
    })
}

const allCart = async (req,res) => {
    const data = await cartModel.find();
    res.status(200).json({
        status :"success",
        data
    })
}

const singleCart = async (req,res) => {
    const id = req.params.id;
    const data = await cartModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const cartUser = async (req,res) => {
    const id = req.params.id;
    const data = await cartModel.find({"userId" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const cartDelete = async ( req,res ) => {
    const id = req.params.id;
    const data = await cartModel.deleteOne({"id":id});

    res.status(200).json({
        status:"success",
        data
    })
}

const cartUpdate = async ( req , res ) => {
    const id = req.params.id;
    await cartModel.updateOne({"id" : id} ,req.body);
    const data = await cartModel.find({"id" : id});
    
    res.status(200).json({
        status : "success",
        data
    })
}

module.exports = {
    cartRegister,
    singleCart,
    cartUser,
    cartDelete,
    cartUpdate,
    allCart
}