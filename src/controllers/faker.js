require('dotenv').config();
const moment = require('moment');
const faker = require('faker');
const mongoose = require('mongoose');
const Group = require('../models/group.server.model');
const Member = require('../models/member.server.model');

const numberOfGroups = 5;
const numberOfMembers = 10;

mongoose.connect(`mongodb://${process.env.TEST_DB_USER}:${process.env.TEST_DB_PASS}@${process.env.TEST_DB_HOST}`, { useMongoClient: true });

const createGroup = function createGroup(memberEntries) {
  const groupEntry = new Group({
    name: faker.company.companyName(),
    deadline: moment().add(1, 'day'),
    message: faker.lorem.paragraph(),
    members: memberEntries,
  });
  groupEntry.save((err) => {
    if (err) return console.error(err);
    return console.log('entry saved');
  });
};

const createMember = function createMember() {
  const memberEntry = new Member({
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
    },
    email: faker.internet.email(),
  });

  return memberEntry;
};

(function addMemToGroup() {
  for (let i = 0; i < numberOfGroups; i++) {
    const memberEntries = [];
    for (let i = 0; i < numberOfMembers; i++) {
      memberEntries.push(createMember());
    }
    createGroup(memberEntries);
  }
}());
console.log('all entries saved');
