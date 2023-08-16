const express = require('express');
const User = require('../models/user');
const router = express.Router();

// create user using POST 
router.post('/', (req, res) => {
    console.log(req.body);
    const user = new User(req.body)
    user.save()
    res.send(req.body);
});

module.exports = router;