require("dotenv").config();
const express = require("express");
const cors = require("cors");
const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());





// routes
app.get("/", (req, res) => {
  res.send("Hello! Welcome to the MERN Watch backend!");
});

app.get("/products", (req, res) => {
  res.json(products);
});


// not found route
app.get("*", (req, res) => {
  res.status(404).send("404 Not Found ! Return to the homepage");
});


// server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
