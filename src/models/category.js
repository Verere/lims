import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {type: String},   
    group: {type: String},   
   slug:{type: String},   
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

export default mongoose.models.category || mongoose.model('category', CategorySchema) 