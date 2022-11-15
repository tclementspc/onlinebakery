const express = require("express");
const cors = require("cors");

const products = require("./products");
/*products array is saved in products js in backend folder */

const app = express();

app.use(express.json());
/* middleware function to increase functionality of app */
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API..");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));