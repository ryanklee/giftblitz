require('dotenv').config();
const shuffle = require('lodash.shuffle');
const moment = require('moment');
const mongoose = require('mongoose');
const Group = require('../../models/group.server.model');
const Member = require('../../models/member.server.model');
const addMatch = require('./member.controller.server');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

const generateMatches = function generateMatches(idCollection, item) {
  let memberIDs = [];
  const matches = {};

  Object.keys(idCollection[item]).forEach((entry) => {
    memberIDs.push(entry);
  });

  memberIDs = shuffle(memberIDs);
  let pool = shuffle(memberIDs);
  let setGood = true;

  memberIDs.forEach((id) => {
    if (id === pool[pool.length - 1] && pool.length === 1) {
      setGood = false;
    } else if (id === pool[pool.length - 1]) {
      pool = pool.reverse();
      matches[id] = pool.pop();
    } else {
      matches[id] = pool.pop();
    }
    return true;
  });

  if (setGood === false) return false;
  return matches;
};

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
        let matches = false;
        while (matches === false) {
          matches = generateMatches(idCollection, item);
        }
        
        Object.keys(matches).forEach((member, index) => {
          //console.log(`${item} ${index} ${member} is matched with ${matches[member]}`);
          addMatch(item, index, matches[member]);
          //console.log(idCollection);
        });
      });
  });


