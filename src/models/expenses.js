import mongoose from "mongoose";

const ExpensesSchema = new mongoose.Schema({


    bDate:{type: String},
    description:{type: String},
    amount:{type: Number},
    receivedBy:{type: String},
    authorisedBy:{type: String},
   slug:{type: String},
   user:{type: String},
   isCancelled:{type:Boolean, default:false},
  updatedBy:{type: String},
   updatedAt: {
        type: Date,
        default: Date.now
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.expenses || mongoose.model('expenses', ExpensesSchema) 