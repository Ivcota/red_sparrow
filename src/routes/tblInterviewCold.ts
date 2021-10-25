import express from "express";
import { getInterviewsColds } from "../controllers/tblInterviewCold";
import { query } from "express-validator";
import { tblInterviewColdValidator } from "../validators/tblInterviewValidators";
const router = express.Router();

router.route("/").get(tblInterviewColdValidator, getInterviewsColds);

export { router as interviewColdRoutes };
