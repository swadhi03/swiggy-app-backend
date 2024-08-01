const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const json = require("jsonwebtoken")
const LoginModel = require("./models/Admin")

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

const app=express()
app.use(cors())
app.use(express.json())

//api for Admin Signup
app.post("/adminsignin",(req,res)=>{
    let input=req.body
    let hashedPassword=bcrypt.hashSync(input.password,10)
    input.password=hashedPassword
    console.log(input)
    let result = new LoginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(8081,()=>
    console.log("server started")
)