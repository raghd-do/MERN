// SETUP Express
const express = require("express");
const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to MongoDB
require("./server/config/mongoose.config");

// Import the controller
const JokesRoutes = require("./server/routes/jokes.routes");
JokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
