const jwt=require("jsonwebtoken")
const userCollection=require("../models/user.model")
const ordersCollections=require("../models/order.model")
exports.orderProduct=async(req,res)=>{
    try {
    const {token}=req.headers
const {products,payment}=req.body
    const validToken=await jwt.verify(token,process.env.SECRET_KEY)
 
if(!validToken){
    return res.status(200).send({messsage:"token not valid"})
}

const validUser=await userCollection.findOne({email:validToken.email})

if(!validUser){
    return res.status(404).send({result:false,meesage:"user not found"})
   }
    const storedOrders=await ordersCollections({
        products,
        payment,
        buyer:validUser._id
    }).save()
    if (!storedOrders){
return res.status(400).send({message:"error while storing order"})
    }
    res.status(201).send({result:true,message:"products ordered successfully"})
    
    } catch (error) {
        console.log(error)
    }
}

exports.gettingAllOrders=async(req,res)=>{
    try {
        const {token}=req.headers
   
        const validToken=await jwt.verify(token,process.env.SECRET_KEY)
 
        if(!validToken){
            return res.status(200).send({messsage:"token not valid"})
        }
        
        const validUser=await userCollection.findOne({email:validToken.email})
      
        if(!validUser){
            return res.status(404).send({result:false,meesage:"user not found"})
           }
           const allorders=await ordersCollections.find({buyer:validUser._id})
           .populate("products")
           .populate("buyer")
      res.status(200).send({result:true,message:"all bills retrived",allorders})
    } catch (error) {
        console.log(error)
    }
}