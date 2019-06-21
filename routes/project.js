const express = require('express');
const Projecto =require('./../model/Projecto');
const router = express.Router();

/* GET users listing. */
router.get('/',async function (req, res, next) {
    res.json( await Projecto.find())
});

router.post('/',async function (req, res, next) {
    const project = new Projecto(req.body);
    await project.save()
    res.sendStatus(2000);
});

router.put('/project/:id', function (req, res, next) {
     Projecto.updateOne({id:req.params.id},req.body);
     res.sendStatus(2000);
});

router.delete('/project/:id', async function (req, res, next) {
    const retorno= await Projecto.deleteOne({id:req.params.id})
    res.json(retorno);
});

module.exports = router;
