const Todo = require('../models/models');


exports.postTodo =async (req,res,next) =>{
    const data = req.body;
    try {   
        const todo = await Todo.create(data);
        todo.save();
        res.status(201).json({message: "Todo created successfully."})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.getTodos = async (req,res,next)=>{
    try {
        const todo = await Todo.find({}).sort({createdAt: -1});
        res.status(200).json({message:"Todos get successfully.", todo});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}