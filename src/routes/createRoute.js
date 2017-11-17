const express = require('express');

const createRouter = express.Router();

const router = function (nav) {
  createRouter.route('/')
    .get(function (req, res) {
      res.render('create', {
        Title: 'CREATE',
        Nav: nav
      });
    });
    return createRouter;
};

module.exports = router;