import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'Pharmacy' });

const Pharmacy = mongoose.models.Pharmacy || mongoose.model('Pharmacy',pharmacySchema);
export default Pharmacy;