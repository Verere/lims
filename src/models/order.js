import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    patientId:{type: String},
    name:{type: String},
    phone:{type: String},
    address:{type: String},
    orderNum:{type: String},
       tests:{type: Array},
       amount: {type: Number}, 
       amountPaid: {type: Number, default:0}, 
       bal: {type: Number},  
       clinic:{type: String},
       clinicId:{type: String},       
       referral:{type: String},        
       referralId:{type: String},
       clinicId:{type: String},
        billTo:{type: String},
       user:{type: String,   required: true},
       status:{type: String},
       slug:{type: String},
       bDate: {
        type: Date,
    } ,
          
   isCancelled:{type: Boolean, default:false},  
}, {
    timestamps: true
})
   

export default mongoose.models.order || mongoose.model('order', OrderSchema) 