import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbURI = "mongodb+srv://harini23amutha:j2dsTYIf2htB80i9@harini.vizb4.mongodb.net/?retryWrites=true&w=majority&appName=harini";
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
