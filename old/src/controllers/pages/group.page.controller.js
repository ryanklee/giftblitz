const createGroup = require('../servers/group.controller.server');

const groupPageController = function groupPageController(nav) {
  const getIndex = function getIndex(req, res) {
    res.render('group', {
      Title: 'CREATE GROUP',
      Nav: nav,
    });
  };

  const postGroup = function postGroup(req, res) {
    res.redirect('/group');
    return createGroup(req, res);
  };

  return {
    getIndex,
    postGroup,
  };
};

module.exports = groupPageController;
