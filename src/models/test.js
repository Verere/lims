import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: {type: String},   
    test_code: {type: String},   
    price: {type: Number},
    category: {type: String},  
    group: {type: String},  
    description: {type: String},  
    slug: {type: String},  
    available: {type: Boolean, default:true},  
      user:{type: String,   required: true},
      updatedBy:{type: String},
       isCancelled:{type:Boolean, default:false},
      updatedAt: {
           type: Date,
           default: Date.now
       } ,
       createdAt: {
           type: Date,
           default: Date.now
       } 
   
})

export default mongoose.models.test|| mongoose.model('test', TestSchema) 