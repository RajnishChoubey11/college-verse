import mongoose from "mongoose";

const bestSchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'Best' });

const Best = mongoose.models.Best || mongoose.model("Best", bestSchema);
export default Best;
