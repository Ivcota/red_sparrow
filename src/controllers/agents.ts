import { Request, Response } from "express";
import { db } from "../db/db";

export const getUniqueAgents = async (req: Request, res: Response) => {
  const agents = await db.tblInterviewCold.findMany({
    distinct: ["Contractor_AFF"],
    select: {
      Contractor_AFF: true,
    },
  });

  let agentsList = [];

  agents.forEach((agent) => {
    agentsList.push(agent.Contractor_AFF);
  });

  res.status(200).json(agentsList);
};
