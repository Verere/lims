import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    name: {type: String},   
    hotelId:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

export default mongoose.models.location || mongoose.model('location', LocationSchema) 