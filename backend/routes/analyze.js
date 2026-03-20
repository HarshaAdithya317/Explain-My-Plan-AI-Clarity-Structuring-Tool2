import express from "express";
import axios from "axios";
import { buildPrompt } from "../utils/prompt.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { input } = req.body;
    const prompt = buildPrompt(input);

    // FIX: Using gemini-2.5-flash which is the 2026 stable-ish standard for v1beta
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(
      url,
      {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      },
      { headers: { "Content-Type": "application/json" } }
    );

    // Safety check: Ensure candidates exist
    if (!response.data.candidates || response.data.candidates.length === 0) {
      throw new Error("No response from AI model.");
    }

    const aiResponseText = response.data.candidates[0].content.parts[0].text;
    const parsed = JSON.parse(aiResponseText);

    res.json(parsed);

  } catch (error) {
    if (error.response) {
      // This will now show you clearly if it's a 404, 400, or 429 (Rate Limit)
      console.error("Gemini API Error:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("Local Error:", error.message);
    }
    res.status(500).json({ error: "AI failed to process the request." });
  }
});

export default router;