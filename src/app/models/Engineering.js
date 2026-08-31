import mongoose from "mongoose";

const engineeringSchema = new mongoose.Schema(
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
  { collection: "Engineering", strict: false }
);

const Engineering =
  mongoose.models.Engineering ||
  mongoose.model("Engineering", engineeringSchema);

export default Engineering;