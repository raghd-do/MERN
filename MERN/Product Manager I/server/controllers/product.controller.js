const Product = require("../models/product.model");

module.exports.all = (req, res) => {
  Product.find().then((products) => res.json(products));
};

module.exports.one = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((one) => res.json(one))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.add = (req, res) => {
  Product.create(req.body)
    .then((newP) => res.json(newP))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.update = (req, res) => {
  Product.update({ _id: req.params.id }, req.body, { new: true })
    .then((updated) => res.json(updated))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.delete = (req, res) => {
  Product.remove({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
