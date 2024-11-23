import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL || "mongodb+srv://21bd1a665dcsmc:FaisaL123@t-m.auj79.mongodb.net/?retryWrites=true&w=majority&appName=T-M";

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}