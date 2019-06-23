const express = require('express');
const Project = require('./../model/Project');
const router = express.Router();
const {isAuthenticated} = require('./../conf/Utils');

router.get('/', async function (req, res, next) {
    res.json(await Project.find())
});

router.post('/', isAuthenticated, async function (req, res, next) {
    const project = new Project(req.body);
    await project.save().then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))

});

router.put('/:id', isAuthenticated, async function (req, res, next) {
    await Project.updateOne({
        _id: req.params.id
    }, req.body).then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))
});

router.delete('/:id', isAuthenticated, async function (req, res, next) {
    await Project.deleteOne({
        _id: req.params.id
    }).then(() => res.sendStatus(200)).catch(() => res.sendStatus(500))

});

module.exports = router;