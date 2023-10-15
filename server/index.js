const express = require('express');
const  dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config({path:path.join(__dirname,".env")})
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());


app.listen(5000,(err)=>{
    if(err) console.log(`Error:${err}`);
    console.log(`Server Connected: ${PORT}`);
})