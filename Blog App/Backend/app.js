let express=require('express')
let mongoose=require('mongoose')
let cors=require('cors');
let app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/BharatinternBlogdatabase")
.then(()=>{console.log('connect to mongodb')})
.catch(err=>{console.log('not connected',err)})

let BLOG=require('./models/blogs');
let USER=require('./models/model')



app.get("/",(req,res)=>{
   return res.send("hello world")
})

app.post("/signup",(req,res)=>{
    const {fullname,username,email,password}=req.body
    if(!fullname||!username||!email||!password){
       return res.status(404).send('fill all the feilds')
    }
  
    let user=new USER({
        fullname,
        username,
        email,
        password
    })
    let result=user.save()
    console.log(result)
    res.send(result)
    console.log("signup successfully")
})
//signin
app.post("/signin",(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
       return res.status(404).send('fill all the feilds')
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
          return  res.status(404).send('not a Registrated member')
        }
        console.log(savedUser)
        res.send(savedUser)
    })
    USER.findOne({password:password}).then((savedUser)=>{
        if(!savedUser){
           return res.status(404).send('not a Registrated member')
        }
        console.log(savedUser)
        res.send(savedUser)
        console.log('signin successfully')
    })
})


app.post("/blogs",(req,res)=>{
    const {title,bodycontent,author}=req.body
    if(!title||!bodycontent||!author){
        res.status(400).send("please fill all the fields")
    }
    let blog=new BLOG({
        title,
        bodycontent,
        author
    })
    let result=blog.save();
    console.log(result)
    res.send(result)
    console.log("blog is added")
})
app.get("/getblogs",async(req,res)=>{
    let result=await BLOG.find();
    if(!result){
       return res.send("no blogs found")
    }
    res.send(result)
    console.log("Blog is showed")
})
app.delete("/deleteblog",async(req,res)=>{
    let result=await BLOG.findByIdAndDelete(req.body._id);
    if(!result){
       return res.status(404).send('not deleted')
    }
    res.send(result)
    console.log("deleted successfully")
})
app.put("/update/:id",async(req,res)=>{
    let result=await BLOG.findByIdAndUpdate({_id:req.params.id},{
        title:req.body.title,
        bodycontent:req.body.bodycontent,
        author:req.body.author
    })
    res.send(result)
    res.send('update successfully')
    console.log("update successully")
})
app.get('/search/:key',async(req,res)=>{
    let result=await BLOG.find({
        "$or":[
            {"title":{$regex:req.params.key}},
            {"bodycontent":{$regex:req.params.key}},
            {"author":{$regex:req.params.key}}
        ]
    })
    res.send(result)
    console.log(result)
})

let port=process.env.PORT||3000
app.listen(port,()=>{console.log(`app is running at ${port}`)})