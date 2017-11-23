require('dotenv').config();
const mongoose = require('mongoose');
const Group = require('../../models/group.server.model');
const sendEmail = require('./mailer.service');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

Group.aggregate([
  {
    $project: { 'members.email': 1 },
  },
  {
    $unwind: '$members',
  },
],
)
  .exec((err, result) => {
    if (err) {
      console.log(err);
    }
    for (const key in result) {
      sendEmail(result[key].members.email);
    }
  });

