const commentModel = require("../model/commentModel");

const commentRegister = async (req,res) => {
    const data = await commentModel.create(req.body);
    res.status(200).json({
        status : "success",
        data
    })
}

const allComments = async (req,res) => {
    const data = await commentModel.find();
    res.status(200).json({
        status : "success",
        data
    })
}

const singleComment = async ( req,res ) => {
    const id = req.params.id;
    const data = await commentModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const limitSkipComment = async (req,res) => {
    const data = await commentModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status : "success",
        data
    })
}

const commentPostId = async (req,res) => {
    const id = req.params.id;
    const data = await commentModel.find({"postId":id});
    res.status(200).json({
        status : "success",
        data
    })
}

const commentUpdate = async (req,res) => {
    const id = req.params.id;
    await commentModel.updateOne({"id" : id},req.body);
    const data = await commentModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const commentDelete = async (req,res) => {
    const id = req.params.id;
    const data = await commentModel.deleteOne({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

module.exports = {
    commentRegister,
    allComments,
    singleComment,
    limitSkipComment,
    commentPostId,
    commentUpdate,
    commentDelete
}