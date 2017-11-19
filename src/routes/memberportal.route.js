'use strict';
const express = require('express');
const memberPortalRouter = express.Router();

const router = function (nav) {
  const memberPortalController = require('../controllers/memberportal.controller')(nav);
  
  memberPortalRouter.route('/')
    .get(memberPortalController.getIndex)
    .post(memberPortalController.postMember);
  
    return memberPortalRouter;
};

module.exports = router;