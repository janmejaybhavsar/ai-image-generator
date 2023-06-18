import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(() => {
        console.log("Connected to database");
    }
    ).catch((err) => {
        console.log("Error connecting to database");
    }
    );
}

export default connectDB;