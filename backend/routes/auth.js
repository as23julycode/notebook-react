const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'haiadityasingh';
// create user using POST "/api/auth"
router.post('/createuser',[
    body('name','enter valid name').isLength({ min : 3 }),
    body('email','enter valid email').isEmail(),
    body('password').isLength({ min : 5 }),

    ], async(req, res) => {
        // if there are errors then return bad request and error
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
        const salt = await bcrypt.genSalt(10);
        const secpassword = await bcrypt.hash(req.body.password, salt);
            // creating new user
        user = await User.create({
            name: req.body.name,
            password: secpassword,
            email: req.body.email,
            });
        const data = {
            user:{
                id : user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        console.log(authtoken);
        res.json(authtoken);

    } catch(error) {
        console.error(error.message)
        res.status(500).send("some error occurred");
    }
});

module.exports = router;