import express from "express";
import dotenv from "dotenv";
import { homeRoutes } from "./routes/home";
import { interviewColdRoutes } from "./routes/tblInterviewCold";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("", homeRoutes);
app.use("/api/interview-cold", interviewColdRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
