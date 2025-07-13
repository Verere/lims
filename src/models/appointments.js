import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    lab: {
        type: mongoose.Schema.ObjectId,
        ref: 'lab',
        required: true
    },   patient_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'patient',
        required: true
    },
    lab_technician_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'labTech',
        required: true
    },
    appointment_type: {type: String},  // Pending, Completed, Reviewed 
    status: {type: String, default:"Completed"},  // Pending, Completed, Reviewed 
    appointment_date: {
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

export default mongoose.models.appointment|| mongoose.model('appointment', AppointmentSchema) 

  