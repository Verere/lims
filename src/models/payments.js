import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
      order:{
        type: mongoose.Types.ObjectId,
        ref: 'order'
    },
   patient: {
    type: String,
},
   slug:{type: String},
   orderNo:{type: String},
   testAmount: {type: Number}, 
   amountPaid: {type: Number}, 
   mop:{type: String},
  user:{type: String},
  status:{type: String},
  updatedBy:{type: String},
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

export default mongoose.models.payment || mongoose.model('payment', PaymentSchema) 