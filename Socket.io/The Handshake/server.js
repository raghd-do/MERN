// Setup
const express = require("express");
const app = express();
const port = 8000;

// App fire
const server = app.listen(port, () => {
  console.log(`Server fired on ${port}`);
});

// IO
const io = require("socket.io")(server, { cors: true });

io.on("connection", (socket) => {
  console.log("Nice to meet you (shake hand)");
  socket.emit("Welcome", "Hello");
});
