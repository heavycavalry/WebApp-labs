const Product = require('../models/product.model');

const products = [];

exports.getAll = (req, res) => {
    res.status(200).send(products);
  };

exports.add = (req, res) => {
  console.log(req.body);
  const product = new Product(req.body.name, req.body.description, req.body.price);
  products.push(product);
  res.status(201).send(product);
}

exports.update = (req, res) => {
}

exports.delete = (req, res) => {
  console.log(req.params.id);
}