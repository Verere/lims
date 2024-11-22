import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
    name: {type: String},   
    slug: {type: String},   
   
    createdBy:{type: String},   
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

export default mongoose.models.group || mongoose.model('group', GroupSchema) 