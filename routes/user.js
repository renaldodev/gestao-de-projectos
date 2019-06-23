const express = require('express');
const User = require('./../model/User');
const router = express.Router();
const jwt=require('jsonwebtoken')

router.get('/', async function (req, res, next) {
  res.json({user:await User.find(),authData:req.authData})
});

router.post('/', async function (req, res, next) {
  const project = new User(req.body);
  await project.save().then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))

});

router.put('/:id', async function (req, res, next) {
  await User.updateOne({
    _id: req.params.id
  }, req.body).then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))
});

router.delete('/:id', async function (req, res, next) {
  await User.deleteOne({
    _id: req.params.id
  }).then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))

});

module.exports = router;