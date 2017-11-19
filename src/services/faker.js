'use strict';
const faker = require('faker');

const Group =
  {
    groupID: faker.random.uuid(),
    groupName: faker.lorem.word(),
    deadline: faker.date.soon,
    message: faker.lorem.paragraph(),
    url: faker.internet.url(),
    members: [
      {
        memberID: faker.random.uuid(),
        memberName: faker.name.firstName(),
        email: faker.internet.email(),
        match: null
      }, {
        memberID: faker.random.uuid(),
        memberName: faker.name.firstName(),
        email: faker.internet.email(),
        match: null
      }, {
        memberID: faker.random.uuid(),
        memberName: faker.name.firstName(),
        email: faker.internet.email(),
        match: null
      }, {
        memberID: faker.random.uuid(),
        memberName: faker.name.firstName(),
        email: faker.internet.email(),
        match: null
      }, {
        memberID: faker.random.uuid(),
        memberName: faker.name.firstName(),
        email: faker.internet.email(),
        match: null
      }
    ]
  };


module.exports = Group;