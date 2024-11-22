import mongoose from "mongoose";

const ClinicSchema = new mongoose.Schema({


    name:{type: String},
    address:{type: String},
   slug:{type: String},
   user:{type: String},
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

export default mongoose.models.clinic || mongoose.model('clinic', ClinicSchema) 