const express = require('express');
const User = require('../model/User');
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.json(await User.find())
});

router.post('/', async function (req, res, next) {
  const project = new User(req.body);
  await project.save()
  res.sendStatus(2000);
});

router.put('/user/:id', function (req, res, next) {
  Projecto.updateOne({
    id: req.params.id
  }, req.body);
  res.sendStatus(2000);
});

router.delete('/user/:id', async function (req, res, next) {
  const retorno = await User.deleteOne({
    id: req.params.id
  })
  res.json(retorno);
});

module.exports = router;
