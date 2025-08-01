import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regNumber:{
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    address: {
        type: String,
    },   
    gender: {
        type: String,
    },   
    number: {
        type: Number        
    },
    email: {
        type: String,
    }, 
    slug: {
        type: String,
    }, 
     isCancelled:{type:Boolean, default:false},
    labId: {type: mongoose.Types.ObjectId,
        ref: 'lab'}, 
       
   
}, {
    timestamps: true
})

let Dataset = mongoose.models.patient || mongoose.model('patient', PatientSchema)
export default Dataset