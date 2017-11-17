const express = require('express');
const adminRouter = express.Router();

const router = function(nav) {
  adminRouter.route('/')
    .get(function (req, res) {
      res.send('hey there admin');
    });
  return adminRouter;
};

module.exports = router;
