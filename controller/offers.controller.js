const offerSchama=require("../models/Offers.model")
const bundleProduct=require("../models/Bundle.model")
exports.createOffers=async(req,res)=>{
    try {
        const {offerName,details}=req.body

      const storeOffers=await new offerSchama({
    offerName,
    details,
      }).save()

      if(!storeOffers){
        return res.status(400).send({message:"error while storing offers"})
      }
res.status(201).send({result:true,message:"offer stored sucefully succefully"})
    } catch (error) {
        console.log(error)
    }
}

exports.getAllOffers=async(req,res)=>{
    try {
        const allOffers=await offerSchama.find({}).populate('details.bundledProducts');
      if(!allOffers){
        return res.status({result:false,message:"there is no offers"})
      }
res.status(200).send({result:true,message:"all offers retriverd successfully",allOffers})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"internal server error"})
    }
}

exports.createBundle=async(req,res)=>{
    try {
        const {productId}=req.params
        const stored=await bundleProduct({product:productId}).save()
        if(!stored){
            return res.status(400).send({result:false,message:"error while store product"})
        }
        res.status(201).send({result:true,message:"product stored successfully"})
    } catch (error) {
        console.log(error)
    }
}