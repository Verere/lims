import mongoose from 'mongoose'

const MenuStockSchema = new mongoose.Schema({
    location: {
        type: String
    },
    menuId: {
        type: mongoose.Types.ObjectId,
        ref: 'menu'
    },
    menu: {
        type: String
    },
    uom: {
        type: String,
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
    price: {
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
        type: String
    },             
    hotelId: {
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

let Dataset = mongoose.models.menuStock || mongoose.model('menuStock', MenuStockSchema)
export default Dataset

    
         
   