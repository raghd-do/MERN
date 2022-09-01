const product = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", product.all);
  app.get("/api/products/:id", product.one);
  app.post("/api/products/new", product.add);
  app.put("/api/products/:id", product.update);
  app.delete("/api/products/:id", product.delete);
};
