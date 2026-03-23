export const buildPrompt = (userInput) => {
  return `
    You are a Strategic Planning AI. Analyze the following user idea and convert it into a highly structured execution plan.
    
    User Input: "${userInput}"

    Return ONLY a JSON object with this exact structure:
    {
      "goal": "A concise, clear definition of the end goal.",
      "method": ["Point 1 of the high-level approach", "Point 2 of the high-level approach"],
      "steps": ["Detailed Step 1", "Detailed Step 2", "Detailed Step 3"],
      "timeline": "Estimated timeframe (e.g., 3 months) or 'Not defined'",
      "resources": "List of tools, budget, or skills needed or 'Not defined'",
      "missing_elements": {
        "goal_clarity": "What needs more detail in the goal?",
        "execution_steps": "What specific actions are missing?",
        "resources": "What physical or digital tools are missing?",
        "timeline": "What deadlines are missing?"
      },
      "simplified_version": "A simple 1-sentence summary of the plan.",
      "action_steps": ["Immediate Task 1", "Immediate Task 2"]
    }

    Rules:
    - If a field is missing, use "Not defined".
    - 'method', 'steps', and 'action_steps' MUST be arrays of strings.
    - Provide at least 3 detailed items for 'steps' if possible to ensure a high clarity score.
  `;
};