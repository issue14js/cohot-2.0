const express = require("express")

const app = express()

const notes =[
    {
        title:"",
        discriprion:""
    }
]
app.post("/notes",(req,res)=>{
    console.log(req.body);
    res.send("notes created")
    
})
app.use
module.exports = app