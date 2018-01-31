const nodemailer = require('nodemailer');
const MailDev = require('maildev');

const maildev = new MailDev();

maildev.listen();

// Handle new emails as they come in
maildev.on('new', (email) => {
  console.log('Received new email with subject: %s', email.subject);
  maildev.getAllEmail((err, emails) => {
    if (err) return console.log(err);
    return console.log('There are %s emails', emails.length);
  });
});

const sendEmail = function sendEmail(outgoingEmailAddress) {
  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,
    ignoreTLS: true,
  });

  const mailOptions = {
    from: '"Fred Foo 👻" <foo@blurdybloop.com>', // Sender address
    to: outgoingEmailAddress, // List of receivers
    subject: 'TEST ✔', // Subject line
    text: 'Hello world?', // Plain text body
    html: '<b>Hello world?</b>', // Html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);

    return (error, info);
  });
};

module.exports = sendEmail;
