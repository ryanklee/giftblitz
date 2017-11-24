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
])
  .exec((err, result) => {
    if (err) {
      console.log(err);
    }
    // for (const key in result) {
    //   if (Object.prototype.hasOwnProperty.call(result, key)){
    //     sendEmail(result[key].members.email);
    //   }
    // }

    result.forEach((item, index) => {
      console.log(item.members.email);
    });
  });

