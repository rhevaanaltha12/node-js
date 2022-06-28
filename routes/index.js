const Route = require("express").Router();
const testingAPi = require("../controllers/test");

// Route.get("/api", testingAPi.testApi);
Route.get("/api/", testingAPi.findAll);
Route.post("/api/", testingAPi.postAll);
Route.put("/api/:id", testingAPi.updateAll);
Route.delete("/api/:id", testingAPi.deleteAll);
//   res.send(`hello dari ${req.query.id} ${req.query.nama}`);

Route.get("/api/delete", testingAPi.deleteApi);
Route.get("/api/findByID/:id", testingAPi.findID);

Route.get("/api/:id/", testingAPi.getIDApi);

Route.get("/api/:id/:nama/", testingAPi.getNamaID);

module.exports = Route;
