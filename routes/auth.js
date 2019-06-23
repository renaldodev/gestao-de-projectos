const express = require('express');
const {login}=require('../conf/Utils')
const router = express.Router();


router.post('/login', async function (req, res, next) {
     const response= await login(req.body)
     res.json(response);
});


module.exports = router;