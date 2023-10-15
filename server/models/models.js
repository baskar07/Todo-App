const mongoose = require('mongoose');


const ModelSchema = new mongoose.Schema({
    todo:{
    type:String,
    required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const models = mongoose.model('todo',ModelSchema)

module.exports = models;