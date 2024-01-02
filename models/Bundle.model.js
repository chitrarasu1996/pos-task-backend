const mongoose=require("mongoose");
const bundleProduct=mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', 
        required: true,
    },

})
module.exports=mongoose.model("bundleproduct",bundleProduct)