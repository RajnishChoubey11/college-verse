import mongoose from "mongoose";

const engineeringSchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'Engineering' });

const Engineering = mongoose.models.Engineering || mongoose.model('Engineering',engineeringSchema);
export default Engineering;