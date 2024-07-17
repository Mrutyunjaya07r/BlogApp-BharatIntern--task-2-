let mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    fullname:{type:String,required:true},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

let USER=mongoose.model("USER",userSchema)
module.exports=USER