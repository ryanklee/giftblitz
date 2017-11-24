const createMember = require('../servers/member.controller.server');

const memberPortalController = function memberPortalController(nav) {
  const getIndex = function getIndex(req, res) {
    res.render('member', {
      Title: 'CREATE MEMBER',
      Nav: nav,
    });
  };

  const postMember = function postMember(req, res) {
    res.redirect('/member');
    return createMember(req, res);
  };

  return {
    getIndex,
    postMember,
  };
};

module.exports = memberPortalController;
