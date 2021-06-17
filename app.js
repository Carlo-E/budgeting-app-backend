const express = require("express");
const transactionController = require("./controllers/transactionController");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionController);

// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!!");
});

module.exports = app;
