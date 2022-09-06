const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Authors",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "The Author's name is required"],
        minlength: [3, "The Author's name must be at least 3 characters long."],
      },
    },
    { timestamps: true }
  )
);
