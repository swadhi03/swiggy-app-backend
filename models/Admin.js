const mongoose = require("mongoose")
const LoginSchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        username:{type:String,required:true},
        password:{type:String,required:true}
    }
)

let LoginModel=mongoose.model("admin",LoginSchema)
module.exports=LoginModel