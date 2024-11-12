import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

//404
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
