'use strict';
const express = require('express');
const adminRouter = express.Router();

const router = function (nav) {
  const adminController = require('../controllers/admin.controller')(nav);
  adminRouter.route('/')
    .get(adminController.getIndex);
  return adminRouter;
};

module.exports = router;
