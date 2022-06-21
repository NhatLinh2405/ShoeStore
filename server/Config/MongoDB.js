import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(`error: ${error.message}`);
        window.location.href =
            "https://stackoverflow.com/search?q=[js]+" + error.message;
        process.exit(1);
    }
};

export default connectDatabase;
