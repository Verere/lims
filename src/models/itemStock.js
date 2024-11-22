import mongoose from 'mongoose'

const ItemStockSchema = new mongoose.Schema({
    item: {
        type: mongoose.Types.ObjectId,
        ref: 'item'
    },
    uom: {
        type: String,
        required:true,        
    },
    stock: {
        type: Number,
        required: true
    },   
   
    action: {
        type: String,
        required:true,        
    },
    qty: {
        type: Number,
        required:true,
    },    
    balanceStock: {
        type: Number,
        required:true,
    },    
    costPerUnit: {
        type: Number,
        required:true,
    },  
        
    totalValue: {
        type: Number,
        required:true,
    },    
        
    reOrder: {
        type: Number,
        required:true,
    },    
    isUpdated: {
        type: Boolean,
        default:false,
    },    
     user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },        
     hotel: {
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },        
     businessDate: {
        type: Date,
        default: Date.now
    }
   
}, {
    timestamps: true
})

let Dataset = mongoose.models.itemStock || mongoose.model('itemStock', ItemStockSchema)
export default Dataset