const { start, get } = require('prompt');
const { createTransport } = require('nodemailer');
const prompts = ['from', 'to', 'subject', 'text'];

require('dotenv').config();

start()

get(prompts, (err, results) => {
    createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    }).sendMail(results, (err, info)=> {
        err ? console.log(err) :
        console.log('Email Sent!', info);
    })
})