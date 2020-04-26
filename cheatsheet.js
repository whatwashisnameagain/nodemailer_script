require('dotenv').config();
const { start, get } = require('prompt');
const { createTransport } = require('nodemailer');
const prompts = ['from', 'to', 'subject', 'text'];

start()
get(prompts, (err, result) => {
    createTransport({
        service: 'gmail',
        auth: {
            user: process.env['USER'],
            pass: process.env['PASS']
        }
    }).sendMail(result, (err, info)=> {
        err ? console.log(err) :
        console.log('Email Sent!', info);
    })
})