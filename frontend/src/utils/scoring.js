export const calculateScore = (data) => {
  let score = 0;

  // 1. Goal Clarity (25 pts)
  if (data.goal && data.goal !== "Not defined") {
    // Award more points for longer, more descriptive goals
    score += data.goal.split(" ").length > 5 ? 25 : 15;
  }

  // 2. Defined Steps (25 pts)
  if (data.steps && data.steps.length > 0) {
    if (data.steps.length >= 3) score += 25; // Good detail
    else score += 15; // Minimal detail
  }

  // 3. Timeline Presence (25 pts)
  if (data.timeline && data.timeline !== "Not defined") {
    score += 25;
  }

  // 4. Resource Awareness (25 pts)
  if (data.resources && data.resources !== "Not defined") {
    // Check if they actually listed items or just said something vague
    score += data.resources.length > 10 ? 25 : 15;
  }

  return Math.min(score, 100); // Cap at 100
};