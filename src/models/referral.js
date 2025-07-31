import mongoose from 'mongoose'

const ReferralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regNumber:{
        type: String,
    },
   
    account:{
        type: String,
    },
    accountName:{
        type: String,
    },
   
    address: {
        type: String,
    },   
    number: {
        type: Number        
    },
    email: {
        type: String,
    }, 
    slug:{type: String}, 
    Clinic:{type: String}, 
    isCancelled:{type: Boolean, default: false}
   
}, {
    timestamps: true
})

let Dataset = mongoose.models.referral || mongoose.model('referral', ReferralSchema)
export default Dataset