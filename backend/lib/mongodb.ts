import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

let isConnected = false; // Track connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log("🔄 Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: "digiparkweb", // change to your DB name
    });

    isConnected = true;
    console.log("✅ MongoDB connected:", db.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
