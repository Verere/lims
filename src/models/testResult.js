import mongoose from "mongoose";

const TestResultSchema = new mongoose.Schema({
    test_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'patient',
        required: test
    },
    patient_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'patient',
        required: true
    },
    lab_technician_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'labTech',
        required: true
    },
    result: {type: Array},
    status: {type: String, default:"Completed"},  // Pending, Completed, Reviewed 
      date_completed: {
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

export default mongoose.models.testResult|| mongoose.model('testResult', TestResultSchema) 
