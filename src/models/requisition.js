import mongoose from "mongoose";

const RequisitionSchema = new mongoose.Schema({
    hotel:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },
    item: {
        type: mongoose.Schema.ObjectId,
        ref: 'items',
        required: true
    },
    qty: {type: Number},
    location: {type: String},
    reqBy: {type: String},
    reqDate: {type: Date, default: Date.now},
    supBy: {type: String},
    supStatus: {type: String, default: "pending"},
    qtySup: {type: Number},
    supDate: {type: Date,},
    appBy: {type: String},
    appDate: {type: Date,},  
    appStatus: {type: String, default: "pending"}, 
    qtyApp: {type: Number},
    issBy: {type: String}, 
    qtyIss: {type: Number,},  
    issStatus: {type: String},      
    appDate: {type: Date,}, 
   
})

export default mongoose.models.requisition || mongoose.model('requisition', RequisitionSchema) 