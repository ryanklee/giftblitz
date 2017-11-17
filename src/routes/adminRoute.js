const express = require('express');
const adminRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const mongoURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

const group = [
  {
    id: '',
    name: '',
    deadline: '',
    msg: '',
    url: '',
    members: [
      {
        id: '',
        name: '',
        email: '',
        url: '',
        link: '',
        match: '',
      },
    ],
  },
];

const router = function (nav) {
  adminRouter.route('/')
    .get(function (req, res) {
      mongodb.connect(mongoURL, function (err, db) {

        const collection = db.collection('group');

        collection.insertMany(group,
          function (err, results) {
            res.send(results);
            db.close();
          });
      });
    });
  return adminRouter;
};

module.exports = router;
