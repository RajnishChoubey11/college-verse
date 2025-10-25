import mongoose from "mongoose";

const medicalSchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'Medical' });

const Medical = mongoose.models.Medical || mongoose.model('Medical',medicalSchema);
export default Medical;