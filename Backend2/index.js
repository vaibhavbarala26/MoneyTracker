const express = require("express")
const mongoose = require("mongoose");
const UserModel = require("./Models/User");
const bcrypt = require("bcryptjs");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const TModel = require("./Models/Tracker");
const app = express();
const secret = "Vaibhavbarala"
app.use(cors({
    credentials:true,
    origin: "http://localhost:5173"
}))
app.use(express.json());
const PORT = 1000;
mongoose.connect("mongodb+srv://Vaibhav:1234@cluster0.omnybfa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connectd"))
app.post("/register" , async(req, res)=>{
    const { username, password } = req.body;
    var salt =  bcrypt.genSaltSync(10);
    const doc = await UserModel.create({username , password: bcrypt.hashSync(password, salt)})
    res.send("kldlk");
})
app.post("/login" , async(req , res)=>{
    const {username , password} = req.body;
    const user = await UserModel.findOne({username});
    if(!user){
        return res.status(401).send("Wrong Credentials");
    }
    const ispass = await bcrypt.compare(password, user.password)
    if(!ispass){
        res.json("wrond credentials")
    }
    const token = jwt.sign({
        username, 
        password
    }, 
        secret,
        {expiresIn:"1d"}
    )
    console.log("HO GYA");
    res.status(200).json({id:user._id.toString() , token , username:user.username })
})
app.get("/user" , async (req , res)=>{
    const token = req.header("Authorization")
    const jwttoken = token.replace("Bearer" , "").trim();
    try{ 
       const isverified = jwt.verify(jwttoken , secret);
       const userData = await UserModel.findOne({username:isverified.username}).select({password:0})
       req.user = userData;
       req.token = token; 
       req.userID = userData._id;
       res.status(200).json({msg: userData})
    }
    catch(e){
        console.log("error"); 
    }
})
app.post("/tracker",async(req , res)=>{
    const {amount ,date,  description , value , id} = req.body;
    console.log(req.body);
    const r = await TModel.create({amount , description , value , id , date});
    res.json({r})
} )
app.get("/tracker" , async(req , res)=>{
    const {amount ,date,  description , value , id} = req.body;
    const data = await TModel.find().sort({date:-1});
    res.json(data);
}) 
app.listen(PORT , ()=>{
    console.log("listening on PORT" , PORT);
})