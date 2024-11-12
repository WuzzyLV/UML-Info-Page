import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Submitted!" });
});

//404
app.use((req, res) => {
  res.status(404).json({ message: req.path + " Not found" });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
