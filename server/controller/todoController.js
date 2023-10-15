const Todo = require('../models/models');


exports.postTodo =async (req,res,next) =>{
    const data = req.body;
    try {   
        const todo = await Todo.create(data);
        todo.save();
        res.status(201).json({message: "Todo created successfully."})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}