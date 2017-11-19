'use strict';

const memberPortalController = function (nav) {

  const getIndex = function (req, res) {
    res.render('memberportal', {
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

module.exports = memberPortalController;