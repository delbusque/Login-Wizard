require('dotenv').config();

const express = require('express');
const session = require('express-session');
const validator = require('validator');
const crypto = require('crypto');

const { getTimestamp } = require('./utils/getTimestamp.js')

const app = express();

app.use(session({
    secret: 'come on coys',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json());

app.post('/auth', (req, res) => {
    const { mobileNo, email } = req.body;
    let logs = [];

    if (req.session.userSession) {
        req.session.userSession.logs.forEach(log => logs.push(log));
    }

    if (!mobileNo || !email) {
        return res.status(401).json({ mssg: 'You must provide Mobile no. and Email !' })
    }

    if (!validator.isEmail(email)) {
        return res.status(401).json({ mssg: 'Invalid email format !' })
    }

    crypto.randomBytes(3, function (err, buffer) {
        const code = parseInt(buffer.toString('hex'), 16).toString().substr(0, 6);

        req.session.userSession = { email, mobileNo, code, logs };

        res.status(200).json({ code });
    });
})


app.post('/verify-mobile', (req, res) => {
    const { code } = req.body;
    const { userSession } = req.session;

    const timestamp = getTimestamp();
    const email = userSession.email;
    const mobileNo = userSession.mobileNo;
    const userCode = userSession.code;
    const status = 'success';

    const log = {
        timestamp,
        email,
        mobileNo,
        userCode,
        status,
    }

    if (code !== userSession.code) {
        log.status = 'wrong code';
        req.session.userSession.logs.push(log);

        return res.status(400).json({ mssg: 'Wrong code !' })
    }

    req.session.userSession.logs.push(log);

    return res.status(200).json({
        user: userSession.email,
        mssg: 'Verification successful !'
    })
})

app.get('/logs', (req, res) => {
    const { userSession } = req.session;
    res.status(200).json({ userSession });
})


app.listen(process.env.PORT, () => {
    console.log(`Server is listening for requests on port ${process.env.PORT}...`)
})