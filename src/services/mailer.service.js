'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');
const nmmgTransport = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.MGUN_API_KEY,
        domain: process.env.MGUN_DOMAIN
    }
};

const nodeMailerMailgun = nodemailer.createTransport(nmmgTransport(auth));

nodeMailerMailgun.sendMail({
    from: 'admin@giftbliz.net',
    to: 'rylklee@gmail.com', // An array if you have multiple recipients.
    subject: 'Hey you, awesome!',
    'h:Reply-To': 'ryan@giftbliz.net',
    //You can use "html:" to send HTML email content. It's magic!
    html: '<b>Wow Big powerful letters</b>',
    //You can use "text:" to send plain-text content. It's oldschool!
    text: 'Mailgun rocks, pow pow!'
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
