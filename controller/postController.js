const commentModel = require("../model/commentModel");
const postModel = require("../model/postModel");

const registerPost = async ( req,res ) => {
    const data = await postModel.create(req.body);

    res.status(200).json({
        status : "success",
        data
    })
}

const singlePost = async ( req,res ) => {
    const id = req.params.id;
    const data = await postModel.find({"id" : id});

    res.status(200).json({
        status : "success",
        data
    })
}

const allPost = async (req,res) => {
    const data = await postModel.find();
    res.status(200).json({
        status : "success",
        data
    })
}

const searchPost = async (req,res) => {
    const id = req.query;
    const data = await postModel.find(id);
    res.status(200).json({
        status : "success",
        data
    })
}

const limitSkipPost = async (req,res) => {
    const data = await postModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status : "success",
        data
    })
}

const postUserId = async (req,res) => {
    const id = req.params.id;
    const data = await postModel.find({"userId" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const postComments = async (req,res) => {
    const id = req.params.id;
    const data = await commentModel.find({"postId" : id});
    res.status(200).json({
        status: "success",
        data
    })
}

const postUpdate = async (req,res) => {
    const id = req.params.id;
    await postModel.updateOne({"id" : id},req.body);
    const data = await postModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const postDelete = async (req,res) => {
    const id = req.params.id;
    const data = await postModel.deleteOne({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}



module.exports = {
    registerPost,
    singlePost,
    allPost,
    limitSkipPost,
    searchPost,
    postUserId,
    postComments,
    postUpdate,
    postDelete
}