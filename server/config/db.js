const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(process.env.MONGODB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongodb is connect to the host:${con.connection.host}`);
    }).catch(err=>{
        console.log(err);
    })
}

module.exports = connectDatabase;