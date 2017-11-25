require('dotenv').config();
const mongoose = require('mongoose');
const Group = require('../../../models/group.server.model');
const moment = require('moment');

//const sendEmail = require('./mailer.maildev.server');
//const RateLimiter = require('limiter').RateLimiter;

//const limiter = new RateLimiter(1, 'second');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

// Group.aggregate([
//   {
//     $project: { 'members.email': 1 },
//   },
//   {
//     $unwind: '$members',
//   },
// ])
//   .exec((err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     result.forEach((item, index) => {
//       // limiter.removeTokens(1, (err, remainingRequests) => {
//       //   sendEmail(item.members.email);
//       // });

//       console.log(item);
//     });
//   });

Group.aggregate([
  {
    $match:
      {
        deadline: {
          $gte: new Date(moment().startOf('day')),
          $lt: new Date(moment().endOf('day')),
        },
      },
  },
  {
    $project: { 'members.email': 1 },
  },
  {
    $unwind: '$members',
  },
])
  .exec((err, result) => {
    if (err) console.log(err);
    result.forEach((item, index) => {
      // limiter.removeTokens(1, (err, remainingRequests) => {
      //   sendEmail(item.members.email);
      // });

      console.log(item.members.email);
    });
  });
