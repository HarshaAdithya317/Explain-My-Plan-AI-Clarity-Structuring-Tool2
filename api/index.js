import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js";

dotenv.config();
const app = express();

// 1. IMPROVED CORS BLOCK
app.use(cors({
  origin: "*", // Allows your frontend URL to connect
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// 2. EXPLICIT OPTIONS HANDLER (The Fix for 'Preflight')
app.options('*', cors()); 

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live!");
});

app.use("/analyze", analyzeRoute);

export default app;