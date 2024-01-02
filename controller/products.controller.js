
const productsCollection=require("../models/Products.model")


exports.addProducts=async(req,res)=>{
    try {
   const {productName,price,category}=req.body
 
   const storeData=await productsCollection({productName,price,category:category.toLowerCase()}).save()
   if(!storeData){
    return res.status(400).send({message:"error while storing products"})
   }
   res.status(201).send({message:"products stored succefully"})

} catch (error) {
        console.log(error)
    }
}

exports.getAllProducts=async(req,res)=>{
    try {
    const  allProducts=await productsCollection.find({})
    res.status(200).send({message:"all products retrived",allProducts})
    } catch (error) {
        console.log(error)
    }
}
