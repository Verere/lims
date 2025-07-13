import mongoose from "mongoose";

const LabTechSchema = new mongoose.Schema({
  
    lab: {
        type: mongoose.Schema.ObjectId,
        ref: 'lab',
        required: true
    },
    first_name: {type: String},  // Pending, Completed, Reviewed 
    last_name: {type: String},  // Pending, Completed, Reviewed 
    email: {type: String},  // Pending, Completed, Reviewed 
    phone: {type: Number},  // Pending, Completed, Reviewed 
    specialization: {type: String},  // Pending, Completed, Reviewed 
    employment_date: {
           type: Date,
           default: Date.now
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

export default mongoose.models.labTech|| mongoose.model('labTech', LabTechSchema) 

  
  