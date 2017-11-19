'use strict';

const createController = function (nav) {

  const getIndex = function (req, res) {
    res.render('createmember', {
      Title: 'CREATE MEMBER',
      Nav: nav
    });
  };

  const postMember = function (req, res) {
    const memberController = require('./member.controller.server');
    return memberController.create(req, res);
  };

  return {
    getIndex: getIndex,
    postMember: postMember
  };

};

module.exports = createController;