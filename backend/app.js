import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToMongoDB from "./mongoose.js";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const connectToServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    throw error;
  }
};

await connectToServer();
