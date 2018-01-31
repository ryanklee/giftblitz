require('dotenv').config();
const Group = require('../../models/group.server.model');
const mongoose = require('mongoose');
const moment = require('moment');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

const setPastDeadlines = function setPastDeadlines() {
  Group.update({
    deadline: {
      $gte: new Date(moment().startOf('day')),
      $lt: new Date(moment().endOf('day')),
    },
  }, {
    pastDeadline: true,
  }, {
    multi: true,
  }, (err, rawResponse) => {
    if (err) console.log(err);
    console.log(rawResponse);
  });
};

module.exports = setPastDeadlines;
