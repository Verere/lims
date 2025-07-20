import mongoose from "mongoose";

const EodSchema = new mongoose.Schema({
    cash: {type: Number},
    cashCount: {type: Number},
    pos: {type: Number},
    posCount: {type: Number},
    transfer: {type: Number},
    transferCount: {type: Number},
    totalSales: {type: Number}, 
    credit: {type: Number},
    revenue: {type: Number}, 
    debtPaid: {type: Number}, 
    expenses: {type: Number}, 
    totalTestOrderd: {type: Number}, 
    totalTestCompleted: {type: Number}, 
    pendingTest: {type: Number}, 
    criticalResultReported: {type: Number}, 
    rejectedSamples: {type: Number}, 
    testRepeated: {type: Number},     
    bDate: {type: Date},
    slug:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
   
})

export default mongoose.models.eod || mongoose.model('eod', EodSchema) 