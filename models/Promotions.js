const mongoose = require('mongoose');
const PromotionsSchema = new mongoose.Schema({
    _id : {
      type: String
    },
    expiryDate : {
        type : Date
    },
    discount : {
        type : Number
    },
    amount : {
        type : Number
    },
    type : {
        type : String
    }

  
  },{ toJSON: { virtuals: true }, toObject: { virtuals: true }});

  const Promotions = mongoose.model('Promotions', PromotionsSchema);

module.exports = Promotions;