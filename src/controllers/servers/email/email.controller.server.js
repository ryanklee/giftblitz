require('dotenv').config();
const mongoose = require('mongoose');
const Group = require('../../../models/group.server.model');
const sendEmail = require('./mailer.maildev.server');
const RateLimiter = require('limiter').RateLimiter;
const limiter = new RateLimiter(1, 'second');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

const prepEmails = function fireEmail(idCollection) {
  Object.keys(idCollection).forEach((groupID) => {
    Group.findOne({ _id: groupID }, 'members.email', (error, group) => {
      group.members.forEach((item) => {
        limiter.removeTokens(1, (errors, remainingRequests) => {
          sendEmail(item.email);
          //console.log(remainingRequests);
        });
      });
    });
  });
};

module.exports = prepEmails;
