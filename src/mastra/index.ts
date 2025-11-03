import { Mastra } from "@mastra/core/mastra";
import { studyCoachAgent } from "./agents/studyCoach-agent.js";

export const mastra = new Mastra({
  agents: { studyCoachAgent },
});
