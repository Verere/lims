import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    hotelId:{
        type: mongoose.Types.ObjectId,
        ref: 'hotel'
    },
   menu:{type:String},
   group:{type:String},
   category:{type:String},
   price: {type: Number}, 
  image:{type: String},
  uom:{type: String},  
  location:{type: String},        
    reOrder: {
        type: Number,
        required:true,
    },
   status:{type: String},
  createdBy:{type: String},
   createdAt: {
        type: Date,
        default: Date.now
    } ,
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

export default mongoose.models.menu || mongoose.model('menu', MenuSchema) 