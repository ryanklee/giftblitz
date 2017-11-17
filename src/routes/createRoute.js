'use strict';
const express = require('express');
const createRouter = express.Router();

const router = function(nav) {
  const createController = require('../controllers/createController')(nav);
  createRouter.route('/')
    .get(createController.getIndex);
    return createRouter;
};

module.exports = router;