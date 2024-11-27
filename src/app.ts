import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";
import connectDB from "./config/db.connection";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

connectDB();

export default app;
