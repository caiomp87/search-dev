const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  console.log(req.body);
  return res.json({ ok: true });
});

module.exports = routes;