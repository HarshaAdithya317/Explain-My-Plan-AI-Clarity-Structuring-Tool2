import express from "express";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js"; 

dotenv.config();
const app = express();

app.use(express.json());

// --- MANUAL CORS (THE REAL FIX) ---
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Use a catch-all for the root or simple paths
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Backend is fully live" });
});

// This matches the /analyze path on the main URL
app.use("/analyze", analyzeRoute);

export default app;