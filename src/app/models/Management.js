import mongoose from "mongoose";

const managementSchema = new mongoose.Schema({
   
    Name:String,
    City:String,
    State:String,
    Rank:Number,
    image:String
},{ collection: 'Management' });

const Management = mongoose.models.Management || mongoose.model('Management',managementSchema);
export default Management;