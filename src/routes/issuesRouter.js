import { Router } from "express";

const issues = [
  {
    title: "This is the issues",
    description: "describe the issues your having",
    id: 12345,
  },
];

const issueRouter = Router();

// ! CONTROLLERS / CALLBACK FUNCTIONS
const getAllIssues = (req, res) => {
  res.json({ message: "All Issues", issues });
};

const addIssue = (req, res, next) => {
  const { body } = req;

  if (!body.title || !body.description) {
    const error = new Error(
      "Body of the request must contain a title and a description."
    );
    error.status = 400;
    return next(error);
  }

  const newIssue = {
    title: body.title,
    description: body.description,
    id: Math.random(),
  };

  issues.push(newIssue);

  res.status(201).json({ message: "Created new issue", issue: newIssue });
};

// ! ROUTES or PATHS

// * 1
// issueRouter.get("/", getAllIssues);
// issueRouter.post("/", addIssue);

// * 2
// issueRouter.get("/", getAllIssues).post("/", addIssue);

// * 3
issueRouter.route("/").get(getAllIssues).post(addIssue);

// ! EXPORT
export { issueRouter };
