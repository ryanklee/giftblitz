'use strict';
const express = require('express');
const createMemberRouter = express.Router();

const router = function (nav) {
  const createMemberController = require('../controllers/createmember.controller')(nav);
  
  createMemberRouter.route('/')
    .get(createMemberController.getIndex)
    .post(createMemberController.postMember);
  
    return createMemberRouter;
};

module.exports = router;