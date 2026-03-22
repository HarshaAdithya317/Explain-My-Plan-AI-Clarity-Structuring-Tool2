import express from "express";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js";

dotenv.config();
const app = express();

app.use(express.json());

// --- RAW HEADER INJECTION ---
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Health check to verify the function is even starting
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Backend is alive" });
});

app.use("/analyze", analyzeRoute);

export default app;