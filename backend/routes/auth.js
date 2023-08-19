const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// create user using POST "/api/auth"
router.post('/createuser',[
    body('name','enter valid name').isLength({ min : 3 }),
    body('email','enter valid email').isEmail(),
    body('password').isLength({ min : 5 }),

    ], async(req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) 
        {
            return res.status(500).json({ errors: error.array() });
        }

    //check if user with email is already registered
   try {

        let user = await User.findOne({ email : req.body.email});
        if(user) 
            {
                return res.status(400).json({error: 'user with email Already registered'});
            }
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            })

        res.json(user)

    } catch(error) {
        console.error(error.message)
    }
});

module.exports = router;