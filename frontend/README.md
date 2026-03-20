Explain My Plan — AI Clarity & Structuring Tool
Project Overview
Explain My Plan is a full-stack web application designed to transform vague, unstructured human ideas into clear, actionable execution roadmaps. By leveraging the Gemini AI API, the tool identifies gaps in initial thinking, provides a simplified version of the goal, and generates practical next steps to move from concept to execution.

Setup Instructions:

Prerequisites
Node.js (v18 or higher)

Gemini API Key (obtained from Google AI Studio)

Backend Setup:

Navigate to the /backend directory.

Install dependencies by running: npm install.

Create a .env file in the root of the backend folder and add: GEMINI_API_KEY=your_api_key_here.

Start the server: node index.js.

Frontend Setup
Navigate to the /frontend directory.

Install dependencies by running: npm install.

Start the development server: npm run dev.

Open the application in a browser at http://localhost:5173.

Explanation of Prompt Design
The AI integration utilizes a Strategic Consultant persona to process natural language. The prompt design follows a strict structural framework to ensure data integrity:

Role-Based Context: The model is instructed to act as an expert in strategic planning and business development.

Structured Output Enforcement: The prompt mandates a specific JSON schema, preventing conversational filler and ensuring the frontend can reliably parse arrays for methods, steps, and action items.

Gap Analysis: The AI is specifically tasked with looking for Missing Elements across categories including Goal Clarity, Execution Steps, Resources, and Timeline to provide a critical evaluation rather than just a summary.

Instructional Constraints: Explicit rules are set to return data in point-wise formats (arrays) to maintain a clean and scannable user interface.

Explanation of Clarity Score Logic
The application implements a weighted scoring heuristic to evaluate the readiness of a plan. A total score of 100 is calculated based on four distinct pillars, each contributing up to 25 points:

Goal Clarity (25 Points)
Points are awarded based on the specificity of the redefined goal. A simple presence check grants partial points, while a descriptive, multi-word goal receives full marks.

Execution Detail (25 Points)
This evaluates the granularity of the roadmap. The logic checks the number of identifiable steps provided. A plan with three or more distinct steps is considered well-structured and receives the maximum points for this category.

Timeline Presence (25 Points)
Points are awarded if a specific timeframe, duration, or deadline is identified within the plan. If no chronological markers are found, this section remains at zero.

Resource Awareness (25 Points)
This measures the identification of necessary tools, skills, or budget requirements. Full points are granted when the output details specific resources required for the plan's success.

The logic is designed to be transparent: a binary check confirms the existence of a field, while a secondary check evaluates the granularity of the content to distinguish between a vague idea and a truly actionable plan.