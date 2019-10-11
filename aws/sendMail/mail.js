const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const config = require('./config.js');

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.password,
    }
}));
let mailOptions = {
    from: 'gettestmail14@gmail.com',
    to: 'ttd86@ukr.net',
    subject: 'Test lambda with nodemailer',
    text: 'Test OK',
};

exports.handler = function(event) {
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    error: error.message,
                }),
            };
            return response;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: `mail send`,
            }),
        };
        return response;
    });
}