import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "../backend/routes/analyze.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "*", // for now (safe for assignment)
}));

app.use(express.json());

app.post("/analyze", (req, res) => {
  const mockResponse = {
    goal: "Build a website",
    method: "Use React and deploy",
    steps: ["Plan", "Build", "Deploy"],
    timeline: "Not defined",
    resources: "Not defined",
    missing_elements: {
      goal_clarity: "Partial",
      execution_steps: "Basic",
      resources: "Missing",
      timeline: "Missing"
    },
    simplified_version: "Build and deploy a website",
    action_steps: ["Choose stack", "Code", "Deploy"]
  };

  res.json(mockResponse);
});

export default app;