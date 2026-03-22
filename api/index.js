// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";


// dotenv.config();
// import analyzeRoute from "../backend/routes/analyze.js";


// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/analyze", analyzeRoute);

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 1. Double-check this path. 
// If your 'routes' folder is inside a 'backend' folder at the root, 
// and this file is in 'api/', the path should be correct.
import analyzeRoute from "../backend/routes/analyze.js"; 

dotenv.config();

const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Health check (Verify if the backend is live by visiting your Vercel URL)
app.get("/", (req, res) => {
  res.send("Explain-My-Plan AI Backend is live on Vercel!");
});

// 4. Routes
app.use("/analyze", analyzeRoute);

// 5. CRITICAL: Export for Vercel Serverless
// We remove app.listen(5000) because Vercel handles the invocation.
export default app;