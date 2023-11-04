import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type:String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    
    
  },
  date: {
    type: Date,
    required: true,
    
  },
  
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Booking=mongoose.model("User",userSchema)

export default Booking