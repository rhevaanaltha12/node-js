const model = require("../models/test");

module.exports = {
  testApi(req, res) {
    res.send(`hello dari ${req.body.id} ${req.body.nama}`);
  },
  deleteApi(req, res) {
    res.send(`ini adalah api delete`);
  },
  getIDApi(req, res) {
    res.send(`Ini adalah id nya ${req.params.id} `);
  },
  getNamaID(req, res) {
    res.send(`Ini adalah id nya ${req.params.id} ${req.params.nama}`);
  },

  findAll(req, res) {
    const data = model.findAll();
    res.json(data);
  },
  postAll(req, res) {
    const data = model.Create(req.body.id, req.body.nama);
    res.json(data);
  },
  updateAll(req, res) {
    const data = model.Update(req.params.id, req.body.nama);
    res.json(data);
  },
  deleteAll(req, res) {
    const data = model.Delete(req.params.id);
    res.json(data);
  },
  findID(req, res) {
    const data = model.FindID(req.params.id);
    res.json(data);
  },
};
