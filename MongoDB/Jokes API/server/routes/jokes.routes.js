const Jokes = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", Jokes.allJokes);
  app.get("/api/jokes/random", Jokes.randomJoke); // must be before the :id thus it wont conflect with the int path variable
  app.get("/api/jokes/:id", Jokes.oneJoke);
  app.post("/api/jokes/new", Jokes.newJoke);
  app.put("/api/jokes/update/:id", Jokes.updateJoke);
  app.delete("/api/jokes/delete/:id", Jokes.deleteJoke);
};
