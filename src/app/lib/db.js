import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState >= 1) {
    isConnected = true;
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("❌ MONGODB_URI environment variable is missing in .env");
  }

  try {
    const db = await mongoose.connect(uri, {
      dbName: "Colleges",
    });
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
};

export default connectDB;
