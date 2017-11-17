'use strict';
const createController = function(nav){
  
  const getIndex = function (req, res) {
    res.render('create', {
      Title: 'CREATE',
      Nav: nav
    });
  };

  return {
    getIndex: getIndex
  };

};

module.exports = createController;