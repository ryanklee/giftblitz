'use strict';
const express = require('express');
const createGroupRouter = express.Router();

const router = function (nav) {
  
  const createGroupController = require('../controllers/creategroup.controller')(nav);
  
  createGroupRouter.route('/')
    .get(createGroupController.getIndex)
    .post(createGroupController.postGroup);

  return createGroupRouter;
};

module.exports = router;