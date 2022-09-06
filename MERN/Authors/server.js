// Setup
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// DB fire
require("./server/config/mongoose.config");

// Link routes
const author = require("./server/routes/authors.routes");
author(app);

// App fire
app.listen(port, () => {
  console.log(`Server fired on ${port}`);
});
