'use strict';
const express = require('express');
const groupPortalRouter = express.Router();

const router = function (nav) {
  
  const groupPortalController = require('../controllers/groupportal.controller')(nav);
  
  groupPortalRouter.route('/')
    .get(groupPortalController.getIndex)
    .post(groupPortalController.postGroup);

  return groupPortalRouter;
};

module.exports = router;