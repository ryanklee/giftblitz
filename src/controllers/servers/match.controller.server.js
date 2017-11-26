require('dotenv').config();
const shuffle = require('lodash.shuffle');
const moment = require('moment');
const mongoose = require('mongoose');
const Group = require('../../models/group.server.model');
const Member = require('../../models/member.server.model');
const addMatch = require('./member.controller.server');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });
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
    $project: {
      _id: 1,
      members: 1,
    },
  },
  {
    $unwind: '$members',
  },
])
  .exec((err, result) => {
    if (err) console.log(err);
    const idCollection = {};
    result
      .forEach((item, index) => {
        if (!idCollection[item._id]) {
          idCollection[item._id] = {};
          idCollection[item._id][item.members._id] = { email: item.members.email, first: item.members.name.first, last: item.members.name.last };
        } else {
          idCollection[item._id][item.members._id] = { email: item.members.email, first: item.members.name.first, last: item.members.name.last };
        }
      });
    Object.keys(idCollection)
      .forEach((item) => {
        let memberIDs = [];
        const matches = {};
        Object.keys(idCollection[item]).forEach((entry) => {
          memberIDs.push(entry);
        });

        let pool = shuffle(memberIDs);

        memberIDs.forEach((id) => {
          if (id === pool[pool.length - 1]) {
            pool = pool.reverse();
          } else {
            matches[id] = pool.pop();
          }
        });
        Object.keys(matches).forEach((member, index) => {
          //console.log(`${item} ${index} ${matchid} is matched with ${matches[matchid]}`);
          addMatch(item, index, matches[member]);
        });
      });
  });

// const matchNames = function matchNames(pool) {
//   const matches = {};
//   const allNames = shuffle(pool);

//   allNames.forEach((name) => {
//     if (name === pool[pool.length - 1]) {
//       pool = pool.reverse();
//     }
//     matches[name] = pool.pop();
//   });
//   return matches;
// }
