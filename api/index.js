import express from "express";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js";

dotenv.config();
const app = express();
app.use(express.json());

// Basic health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is active" });
});

// Your AI Route
app.use("/analyze", analyzeRoute);

export default app;