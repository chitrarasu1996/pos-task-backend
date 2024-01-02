const userCollection=require("../models/user.model")
const bcrypt=require("bcrypt")
const { json } = require("express")
const jwt=require("jsonwebtoken")
exports.registerUser=async(req,res)=>{
    try {
    const {userName,password,email}=req.body 

    if(!email){
        return res.status(200).send({
            message:"email is mandatory"
        })
    }
const oldUser=await userCollection.findOne({email})
if(oldUser){
    return res.status(200).send({
        result:false,
        message:"user already exists"
    })
}

    if(!userName||!password,!email){
return res.status(200).send({message:"username or password mandatory "})
    }   

    const hashedPass=await bcrypt.hash(password,12)
    const stroed=await userCollection({email,password:hashedPass,userName}).save()
if(!stroed){
    return res.status(400).send({result:true,message:"error while storing data"})
}
    res.status(201).send({result:true,message:"user created succefully"})


    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"internal server error"})
    }


}

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
      
        const registeredUSer=await userCollection.findOne({email})

        if(!registeredUSer){
        return res.status(200).send({result:false,message:"user not registered"})
    }
    const passMatched=await bcrypt.compare(password,registeredUSer.password)
if(!passMatched){
return res.status(200).send({result:false,message:"password doesn't match"})
}
const token=await jwt.sign({email:registeredUSer.email},process.env.SECRET_KEY,{expiresIn:"7d"})
res.status(201).send({result:true,message:"user logged successfully",user:registeredUSer,token})

    } catch (error) {
         console.log(error)
    }
}