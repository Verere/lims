import mongoose from 'mongoose'

const SubscriptionSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    maxHotel: {
        type: Number,
        required: true
    },    
     subDateCount: {
        type: Number,
        default: 20
    },
    maxMenu: {
        type: Number,
        required: true
    }, 
    maxItem: {
        type: Number,
        required: true
    },    
    maxHotelUser: {
        type: Number,
        required: true
    }, 
    
}, {
    timestamps: true
})

let Dataset = mongoose.models.subscription || mongoose.model('subscription', SubscriptionSchema)
export default Dataset