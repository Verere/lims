import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
    item: {type: String},
    sku: {type: String},
    itemLocation: {type: String},
    prvQty: {type: Number},
    qty: {type: Number},
    action: {type: String},
    UoM: {type: String},   
    newQty: {type: Number},
    reOrder: {type: Number},
    costPerUnit: {type: Number},
    totalValue: {type: Number},
    bDate: {type: Date},
    user:{type: String},    
    hotel:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.inventory || mongoose.model('inventory', InventorySchema) 