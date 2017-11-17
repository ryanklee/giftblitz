'use strict';
const faker = require('faker');

const Groups = [
    {
        groupID: faker.random.uuid(),
        groupName: faker.lorem.word(),
        deadline: faker.date.between(1, 2),
        message: faker.lorem.paragraph(),
        url: faker.internet.url(),
        members: [
            {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }
        ]
    }, {
        groupID: faker.random.uuid(),
        grouName: faker.lorem.word(),
        deadline: faker.date.between(1, 2),
        message: faker.lorem.paragraph(),
        url: faker.internet.url(),
        members: [
            {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }
        ]
    }, {
        groupID: faker.random.uuid(),
        grouName: faker.lorem.word(),
        deadline: faker.date.between(1, 2),
        message: faker.lorem.paragraph(),
        url: faker.internet.url(),
        members: [
            {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }, {
                memberID: faker.random.uuid(),
                memberName: faker.name.firstName(),
                email: faker.internet.email(),
                match: 'placeholder'
            }
        ]
    }
];

module.exports = Groups;