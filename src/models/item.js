import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: {type: String},
    sku: {type: String},
    brand: {type: String},
    group: {type: String},
    category: {type: String},
    unit: {type: String},
    cost: {type: Number},
    hotel:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.item || mongoose.model('item', ItemSchema) 