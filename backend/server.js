import express from "express";
import dotenv from "dotenv";
import { testAnswers } from "./answers.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/submit", (req, res) => {
  const answers = req.body;
  let points = 0;

  if (answers.length !== testAnswers.length) {
    res.status(400).json({ message: "Something went wrong!" });
    return;
  }

  testAnswers.forEach((testAnswer) => {
    const submittedAnswer = answers.find(
      (answer) => answer.questionId === testAnswer.questionId
    );

    if (submittedAnswer.pickedAnswer !== testAnswer.answer) {
      return;
    }

    points++;
  });

  res.status(200).json({ points });
});

//404
app.use((req, res) => {
  res.status(404).json({ message: req.path + " Not found" });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
