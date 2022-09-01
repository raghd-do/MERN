const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Product",
  new mongoose.Schema(
    {
      title: String,
      price: Number,
      description: String,
    },
    { timestamps: true }
  )
);
