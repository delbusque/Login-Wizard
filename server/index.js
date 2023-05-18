require('dotenv').config();

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');

const cookieParser = require('cookie-parser');
const { log } = require('console');

const app = express();

app.use(session({
    secret: 'come on coys',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(cookieParser());

app.use(express.json());

app.post('/auth', (req, res) => {
    const { mobileNo, email } = req.body;

    if (!mobileNo || !email) {
        return res.status(401).json({ mssg: 'You must provide Mobile no. and Email !' })
    }

    if (!validator.isEmail(email)) {
        return res.status(401).json({ mssg: 'Invalid email format !' })
    }

    // if (userSessions[email]) {
    //     res.status(400).send('User with that email already exists !')
    // }

    crypto.randomBytes(3, function (err, buffer) {
        const code = parseInt(buffer.toString('hex'), 16).toString().substr(0, 6);

        req.session.userSession = { email, mobileNo, code };

        res.status(200).json({ code });
    });
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening for requests on port ${process.env.PORT}...`)
        })
    })
    .catch(error => console.log(error))