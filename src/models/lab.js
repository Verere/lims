import mongoose from 'mongoose'

const LabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique:true,
    },
    address: {
        type: String,
        required: true
    },   
    number: {
        type: String,       
    },
    whatsapp: {
        type: String,
    },    
     user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },        
     subscription: {
        type: String,
        required: true,
        default: "trial"
    },
     subStartDate: {
        type: Date,
        default: Date.now
    },    

    logo: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.lab || mongoose.model('lab', LabSchema)
export default Dataset