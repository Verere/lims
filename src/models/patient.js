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
        required: true,
    },
    address: {
        type: String,
        required: true
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
    labId: {type: mongoose.Types.ObjectId,
        ref: 'lab'}, 
       
   
}, {
    timestamps: true
})

let Dataset = mongoose.models.patient || mongoose.model('patient', PatientSchema)
export default Dataset