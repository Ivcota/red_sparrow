import express from "express";
import dotenv from "dotenv";
import { homeRoutes } from "./routes/home";
import { interviewColdRoutes } from "./routes/tblInterviewCold";
import { agentsRoutes } from "./routes/agents";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("", homeRoutes);
app.use("/api/interview-cold", interviewColdRoutes);
app.use("/api/agents", agentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
