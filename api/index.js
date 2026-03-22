import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js";

dotenv.config();
const app = express();

// --- MANUAL CORS HEADERS (THE FIX) ---
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Handle the Preflight (OPTIONS) request immediately
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});
// -------------------------------------

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live and CORS-ready!");
});

app.use("/analyze", analyzeRoute);

export default app;