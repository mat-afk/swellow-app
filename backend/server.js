import express from "express";
import { config } from "dotenv";

const app = express();

config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  // root route: http://localhost:5000/
  res.send("Hello, world!!!");
});

app.listen(PORT, () => console.log(`server running on port ${PORT} =D`));
