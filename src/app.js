import express from "express";
import cors from "cors";
import morgan from "morgan";
import { issueRouter } from "./routes/issuesRouter.js";

const app = express();

// ! MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ! ROUTES
// middleware to handle our routes and were gonna make everything modular (smaller easier to handle)
app.get("/", (req, res) => {
  res.json({
    message:
      "This server is working. Please make a get request to /issues to get all issues, or a post request to /issues to create a new issue.",
  });
});

app.use("/issues", issueRouter);

// ! ERROR HANDLING
// * NOT FOUND
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// * GLOBAL
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ error: { message: error.message } });
});

