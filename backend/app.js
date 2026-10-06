import "dotenv/config";
import express from "express";
import cors from "cors";
import connectToMongoDB from "./mongoose.js";
import { errorHandler } from "./middleware/errorHandler.js";
import alertRouter from "./routes/alertRoutes.js";
import userRouter from "./routes/user.routes.js";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/alerts", alertRouter);
app.use("/api/auth", userRouter);

app.use(errorHandler);

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
