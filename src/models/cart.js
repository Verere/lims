import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({

   order: {
    type: mongoose.Schema.ObjectId,
    ref: 'order',
    required: true
},
   slug:{type: String},
   test:{type: String},
   price: {type: Number},    
   user:{type: String},
   status:{type: String},
  updatedBy:{type: String},
  isCancelled:{type:Boolean, default:false},
   bDate: {
        type: String,
    } ,
   updatedAt: {
        type: Date,
        default: Date.now
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.cart || mongoose.model('cart', CartSchema) 