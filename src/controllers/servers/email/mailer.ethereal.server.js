require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = function sendEmail(outgoingEmailAddress) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'de7lfp4tyyxlmnyw@ethereal.email',
      pass: 'HtsXbUpGY3Z3dAd3Yr',
    },
  });

  const mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // Sender address
    to: outgoingEmailAddress, // List of receivers
    subject: 'TEST ✔', // Subject line
    text: 'Hello world?', // Plain text body
    html: '<b>Hello world?</b>', // Html body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return (error, info);
  });
};

module.exports = sendEmail;
