var express = require('express');
var fs = require('fs');
var Papa = require('papaparse');
var app = express();

app.use(express.json());

app.get("/", (request, response) => {
  const products = fs.readFileSync('./products.csv', 'utf-8');
  const productsJson = Papa.parse(products, {
      delimiter: ";",
      header: true
    });
  return response.json(productsJson.data);
})

app.listen(3333);