const express = require('express');

const indexRouter = express.Router();

const router = function router(nav) {
  indexRouter.route('/')
    .get((req, res) => {
      res.render('index', {
        Title: 'INDEX',
        Nav: nav,
      });
    });
  return indexRouter;
};

module.exports = router;
