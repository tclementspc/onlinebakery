const express = require("express");
/* added line 3 to deal with product detail page */
const path = require("path");

const cors = require("cors");

const app = express();

app.use(cors());

app.options("*", cors());

const data = require("./data");
/*requires the array of products from backend folder */

app.use(express.json());
/*middleware function used on line 7 to increase functionality of app */

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

/* gets the array of products from the backend folder and displays on front end*/
//app.get("/products", (req, res) => {
//  res.send(products);
//});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;
/*line 42 finds a port if 5000 not available */

app.listen(port, console.log(`Server running on port ${port}`));
