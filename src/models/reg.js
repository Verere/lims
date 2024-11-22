import mongoose from "mongoose";

const RegSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Types.ObjectId,
        ref: 'patient'
    },
    reff: {
        type: mongoose.Schema.ObjectId,
        ref: 'ref',
    },
    lab: {
        type: mongoose.Schema.ObjectId,
        ref: 'lab',
        required: true,
    },
    tests: {type: Array},
    location: {type: String},
    businessDate: {type: Date, default: Date.now},
    Amount: {type: Number},
    BillTo: {type: String},
    status: {type: String, default: "pending"}, 
    regBy: {type: String}, 
    qtyIss: {type: Number,},  
    issStatus: {type: String},      
    appDate: {type: Date,}, 
   
})

export default mongoose.models.reg|| mongoose.model('reg', RegSchema) 