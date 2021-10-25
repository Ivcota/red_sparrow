import express from "express";
import { getUniqueAgents } from "./../controllers/agents";
import { agentsValidator } from "./../validators/agentsValidators";
const router = express.Router();

router.route("/").get(getUniqueAgents);

export { router as agentsRoutes };
