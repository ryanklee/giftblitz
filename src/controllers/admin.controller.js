'use strict';
// const mongodb = require('mongodb').MongoClient;
// const mongoURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const mockGroup = require('../data/faker');

const adminController = function(nav){
    const getIndex = function (req, res) {
        // mongodb.connect(mongoURL, function (err, db) {
  
        //   const collection = db.collection('group');
  
        //   collection.insertMany(mockGroup,
        //     function (err, results) {
        //       res.send(results);
        //       db.close();
        //     });
        // });

        res.render('admin', {
            Title: 'ADMIN',
            Nav: nav,
            Mock: mockGroup
          });
      };

    return{
        getIndex: getIndex
    };


};

module.exports = adminController;