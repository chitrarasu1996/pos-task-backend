const mongoose = require("mongoose")

const orderSchema = mongoose.Schema(
    {
        products: [{
            type: mongoose.ObjectId,
            ref: "products"
        }],
        payment:{
            type:Number,
            required:true
        },
        buyer: {
            type: mongoose.ObjectId,
            ref: "users"
        },
    }
)

module.exports = mongoose.model("orders", orderSchema)