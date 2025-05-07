import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", (error) => {
      console.error(`MongoDB connection error: ${error}`);
    });

    await mongoose.connect(config.databaseUrl!);
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
