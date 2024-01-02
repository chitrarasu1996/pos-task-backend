const mongoose=require("mongoose");

const productSchama=mongoose.Schema({
    
productName:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},

price:{
    type:Number,
    required:true
}

})
module.exports=mongoose.model("products",productSchama)