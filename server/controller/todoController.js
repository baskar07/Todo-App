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
        const todos = await Todo.find({}).sort({createdAt: -1});
        res.status(200).json({message:"Todos get successfully.",todos: todos});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.updateTodo = async (req,res,next) => {
    try {
        const {id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id,req.body,{new:true, runValidators:true});
        if(!todo){
            return res.status(404).json({message: "No Todos.."})
        }else{
            res.status(200).json({ message :"Todo updated successfully.", todo:todo});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.deleteTodo = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({message: "No Todo."});
        }
        res.status(200).json({message : "Todo deleted successfully"});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}