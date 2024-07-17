let mongoose=require('mongoose')

let blogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    bodycontent:{type:String,required:true},
    author:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})
let BLOG=mongoose.model("BLOG",blogSchema)
module.exports=BLOG