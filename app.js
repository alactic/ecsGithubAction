import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ESC Training app updated</h1>");
});

app.get("/test", (req, res) => {
  res.status(200).json({data: process.env});
});


export default app;
