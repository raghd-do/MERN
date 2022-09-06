const author = require("../controllers/authors.controllers");

module.exports = (app) => {
  app.get("/api/authors", author.all);
  app.get("/api/authors/:id", author.one);
  app.post("/api/authors", author.add);
  app.put("/api/authors/:id", author.update);
  app.delete("/api/authors/:id", author.delete);
};
