const Joke = require("../models/jokes.model");

module.exports.allJokes = (req, res) => {
  Joke.find()
    .then((allDaJokes) => res.json(allDaJokes))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.oneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneJoke) => res.json(oneJoke))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      let random = Math.floor(Math.random() * allJokes.length - 1);
      res.json(allJokes[random]);
    })
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.newJoke = (req, res) => {
  Joke.create(req.body)
    .then((daJoke) => res.json(daJoke))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  Joke.update({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  Joke.remove({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
