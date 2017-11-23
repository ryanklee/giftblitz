const groupPortalController = function groupPortalController(nav) {
  const getIndex = function getIndex(req, res) {
    res.render('group', {
      Title: 'CREATE GROUP',
      Nav: nav,
    });
  };

  const postGroup = function postGroup(req, res) {
    const groupController = require('../servers/group.controller.server');
    res.redirect('/group');
    return groupController.create(req, res);
  };

  return {
    getIndex,
    postGroup,
  };
};

module.exports = groupPortalController;
