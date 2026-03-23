import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./analyze.js"; 

dotenv.config();
const app = express();

// 1. Better CORS setup
app.use(cors());
app.use(express.json());

// 2. Health check (visit this in browser to test)
app.get("/", (req, res) => res.send("API is awake!"));

// 3. Link the external route
// This makes the endpoint: your-url.com/analyze
app.use("/analyze", analyzeRoute);

export default app;