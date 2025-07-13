/** @format */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: "PMA-weather-app",
		});
		console.log("MongoDB Atlas connected");
	} catch (error) {
		console.error("MongoDB connection failed", error.message);
		process.exit(1);
	}
};
