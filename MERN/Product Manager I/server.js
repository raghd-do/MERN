// Setup
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// DB fire
require("./server/config/mongoose.config");

const product = require("./server/routes/product.routes");
product(app);

// App fire
app.listen(port, () => {
  console.log(`Server fired on ${port}`);
});
