const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});


transporter.sendMail({
    from: '"Your Name" <shoyatbekov@gmail.com>', // sender address
    to: "beklearner03@gmail.com, bekzevs@gmail.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "it's not from shoplify", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}).then(info => {
    console.log('Email has been sent');
}).catch(console.error);


app.listen(3300)


