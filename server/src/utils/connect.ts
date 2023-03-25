import mongoose from "mongoose";
import logger from "./logger";

const mongoUri = process.env.MONGO_URI || "";

export const connect = async () => {
  try {
    if (mongoUri === "") {
      throw new Error("Provide a Valid URI");
    }
    mongoose.set("strictQuery", false);
    logger.info("Connecting to the Database...");
    mongoose.connect(mongoUri);
    logger.info("Connected to the Database");
  } catch (error: any) {
    logger.error(`Error connecting to the Database: ${error.message}`);
  }
};

export const disconnect = () => {
  try {
    mongoose.disconnect();
  } catch (error: any) {
    logger.error(`Error disconnecting from the Database: ${error.message}`);
  }
};
