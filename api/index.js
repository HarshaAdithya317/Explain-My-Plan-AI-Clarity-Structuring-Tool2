import express from "express";
import dotenv from "dotenv";
// Ensure this path is 100% correct for your folder structure
import analyzeRoute from "../backend/routes/analyze.js"; 

dotenv.config();
const app = express();

// --- MANUAL CORS MIDDLEWARE ---
app.use((req, res, next) => {
  // Allow your specific frontend origin or use "*" for testing
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle the browser's "Preflight" check (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Backend is live and Manual CORS is active!");
});

app.use("/analyze", analyzeRoute);

export default app;