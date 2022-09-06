const Author = require("../models/authors.model");

module.exports.all = (req, res) => {
  Author.find()
    .then((authors) => res.json(authors))
    .catch((err) => res.json(err));
};

module.exports.one = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((one) => res.json(one))
    .catch((err) =>
      res.status(404).json({
        message:
          "We're sorry, but we couldn't find the author you are looking for.\nWould you like to add this author to our database?",
      })
    );
};

module.exports.add = (req, res) => {
  Author.create(req.body)
    .then((newA) => res.json(newA))
    .catch((err) => res.status(400).json(err));
};

module.exports.update = (req, res) => {
  Author.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updated) => res.json(updated))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports.delete = (req, res) => {
  Author.remove({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
