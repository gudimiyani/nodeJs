const todoModel = require("../model/todosModel");

const todoRegister = async (req,res) => {
    const data = await todoModel.create(req.body);
    res.status(200).json({
        status : "success",
        data
    })
}

const singleTodo = async (req,res) => {
    const id = req.params.id;
    const data = await todoModel.find({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

const allTodo = async (req,res) => {
    const data = await todoModel.find();
    res.status(200).json({
        status : "success",
        data
    })
}

const randomTodo = async (req,res) => {
    const data = await todoModel.aggregate([{ $sample : { size : 1 }}]);
    res.status(200).json({
        status : "success",
        data
    })
}

const lmitSkipTodo = async (req,res) => {
    const data = await todoModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status : "success",
        data
    })
}

const updateTodo = async (req,res) => {
    const id = req.params.id;
    await todoModel.updateOne({"id" : id},req.body);
    const data = await todoModel.find({"id" :id})
    res.status(200).json({
        status : "success",
        data
    })
}

const deleteTodo = async (req,res) => {
    const id = req.params.id;
    const data = await todoModel.deleteOne({"id" : id});
    res.status(200).json({
        status : "success",
        data
    })
}

module.exports = {
    todoRegister, 
    singleTodo,
    allTodo,
    randomTodo, 
    lmitSkipTodo, 
    updateTodo,
    deleteTodo
}