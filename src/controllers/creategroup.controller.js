'use strict';

const createController = function (nav) {
  
  const getIndex = function (req, res) {
    res.render('creategroup', {
      Title: 'CREATE GROUP',
      Nav: nav
    });
  };
  
  const postGroup = function (req, res) {
    const groupController = require('./group.controller.server');
    return groupController.create(req, res);
  };

  return {
    getIndex: getIndex,
    postGroup: postGroup
  };

};

module.exports = createController;