import mongoose from 'mongoose'

const ReferralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regNumber:{
        type: String,
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
    slug:{type: String}, 
    Clinic:{type: String}, 
   
}, {
    timestamps: true
})

let Dataset = mongoose.models.referral || mongoose.model('referral', ReferralSchema)
export default Dataset