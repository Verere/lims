import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
    name: {type: String},   
    price: {type: Number},
    category: {type: String},  
    group: {type: String},  
    slug: {type: String},  
      user:{type: String,   required: true},
      updatedBy:{type: String},
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