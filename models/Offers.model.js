const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offerName: {
        type: String,
        enum: ['Flat Discount', 'Percentage Discount', 'Product Bundle'],
        required: true,
      },
    details:{
        discountAmount: {
          type: Number,
          default: 0,
        },
        discountPercentage:{
          type: Number,
          default: 0,
        },
        bundledProducts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
        }],
    },
  

});

module.exports = mongoose.model('Offers', offerSchema);