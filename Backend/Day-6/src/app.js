const express = require("express")

// middilware
app.use(express.json())

// rotes
app.post("regiter",(req,res)=>{
    console.log(req.body);
    res.json({
        message :"Data recived",
        data : req.body
    })
})
const app = express()
module.exports = app