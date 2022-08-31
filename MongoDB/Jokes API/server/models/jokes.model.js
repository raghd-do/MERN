const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Joke",
  new mongoose.Schema({
    setup: {
      type: String,
      required: true,
      minLength: [10, "The setup must be atleast 10 characters long !"],
    },
    punchline: {
      type: String,
      required: true,
      minLength: [3, "The punchline must be atleast 3 characters long !"],
    },
  })
);
