import mongoose from "mongoose";
import logger from "./logger";
import dotenv from "dotenv";
import { kpis } from "../data/data";
import KPIModel from "../models/kpi.model";
dotenv.config();

const mongoUri = process.env.MONGO_URI;

export const connect = async () => {
  try {
    if (!mongoUri) {
      throw new Error("Mongo URI not found");
    }
    mongoose.set("strictQuery", false);
    logger.info("Connecting to the Database...");
    await mongoose.connect(mongoUri);
    // KPIModel.insertMany(kpis);
    logger.info("Connected to the Database");
  } catch (error: any) {
    logger.error(`Error connecting to the Database: ${error.message}`);
    process.exit(1);
  }
};

export const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (error: any) {
    logger.error(`Error disconnecting from the Database: ${error.message}`);
  }
};
