import express from "express";
import { getInterviewsColds } from "../controllers/tblInterviewCold";
const router = express.Router();

router.route('/').get(getInterviewsColds)

export {router as interviewColdRoutes}