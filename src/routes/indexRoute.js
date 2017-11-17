'use strict';

const express = require('express');
const indexRouter = express.Router();

const router = function(nav) {
  indexRouter.route('/')
    .get(function (req, res) {
      res.render('index', {
        Title: 'INDEX',
        Nav: nav
      });
    });
    return indexRouter;
};

module.exports = router;