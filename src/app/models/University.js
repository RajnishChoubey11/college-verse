import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'University' });

const University = mongoose.models.University || mongoose.model('University',universitySchema);
export default University;