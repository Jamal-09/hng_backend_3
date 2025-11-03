import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const studyCoachTool = createTool({
  id: "study-coach",
  description:
    "Create a detailed and motivational daily study plan based on the user's goal, duration, and available study hours per day.",

  inputSchema: z.object({
    goal: z.string().describe("The study goal, e.g. 'Learn JavaScript'"),
    duration: z
      .number()
      .optional()
      .describe("Number of days to complete the goal (optional)"),
    hoursPerDay: z
      .number()
      .optional()
      .describe("Available study hours per day (optional)"),
  }),

  outputSchema: z.object({
    plan: z.string().describe("The detailed daily study plan with motivation"),
  }),

  execute: async ({ context }) => {
    const { goal, duration, hoursPerDay } = context;

    const totalDays = duration || 14;
    const hours = hoursPerDay || 2;

    let output = `📘 Study Plan for: ${goal}\n`;
    output += `Duration: ${totalDays} days | ${hours} hrs/day\n\n`;

    for (let day = 1; day <= totalDays; day++) {
      output += `Day ${day}:\n`;
      output += `- Study a focused topic related to "${goal}".\n`;
      output += `- Practice or review what you learned.\n`;
      output += `- Reflect for 15 minutes.\n`;
      output += `💡 Motivation: "Stay consistent. Each day builds mastery."\n\n`;
    }

    return {
      plan: output,
    };
  },
});
