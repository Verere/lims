import mongoose from "mongoose";

const UnitsSchema = new mongoose.Schema({
    hotel:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },
    name: {type: String},
    abv: {type: String},   
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.units || mongoose.model('units', UnitsSchema) 