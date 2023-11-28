const express = require('express')
const app = express()
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

//Express Middleware for JSON and enabling CORS
app.use(express.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});
