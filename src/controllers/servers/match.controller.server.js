require('dotenv').config();
const shuffle = require('lodash.shuffle');
const moment = require('moment');
const mongoose = require('mongoose');
const Group = require('../../models/group.server.model');
const Member = require('../../models/member.server.model');
const addMatch = require('./member.controller.server');

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

const generateMatches = function generateMatches(memberIDs, item) {
  const matches = {};
  let pool = shuffle(memberIDs);
  let allGoodMatches = true;

  memberIDs.forEach((id) => {
    if (id === pool[pool.length - 1] && pool.length === 1) {
      allGoodMatches = false;
    } else if (id === pool[pool.length - 1]) {
      pool = pool.reverse();
      matches[id] = pool.pop();
    } else {
      matches[id] = pool.pop();
    }
    return true;
  });

  if (allGoodMatches === false) return false;
  return matches;
};

Group.aggregate([
  {
    $match: {
      deadline: {
        $gte: new Date(moment().startOf('day')),
        $lt: new Date(moment().endOf('day')),
      },
    },
  },
  {
    $project: { _id: 1, members: 1 },
  },
  {
    $unwind: '$members',
  },
])
  .exec((err, result) => {
    if (err) console.log(err);
    const idCollection = {};
    result
      .forEach((item) => {
        if (!idCollection[item._id]) {
          idCollection[item._id] = [];
          idCollection[item._id].push(item.members._id);
        } else {
          idCollection[item._id].push(item.members._id);
        }
      });

    Object.keys(idCollection).forEach((groupID) => {
      let matches = false;
      while (matches === false) {
        matches = generateMatches(idCollection[groupID]);
      }
      idCollection[groupID] = matches;
    });

    Object.keys(idCollection).forEach((groupID) => {
      const matchedPairs = idCollection[groupID];
      addMatch(groupID, matchedPairs);
    });
  });

