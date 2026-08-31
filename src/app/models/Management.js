import mongoose from "mongoose";

const managementSchema = new mongoose.Schema(
  {
    Name: String,
    City: String,
    State: String,
    Rank: Number,
    image: String,
    Category: String,
    Website: String,
    "Annual Fees": String,
    "Average Package": String,
    "Campus Size": String,
    "Courses Offered": [String],
    Established: String,
    Facilities: [String],
    "Faculty Members": String,
    "Highest Package": String,
    "Placement Rate": String,
    "Top Recruiters": [String],
    "Total Students": String,
  },
  { collection: "Management", strict: false }
);

const Management =
  mongoose.models.Management ||
  mongoose.model("Management", managementSchema);

export default Management;