const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Products",
  new mongoose.Schema(
    {
      title: String,
      price: Number,
      description: String,
    },
    { timestamps: true }
  )
);
