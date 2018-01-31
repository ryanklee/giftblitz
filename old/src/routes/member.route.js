const nav = require('../views/nav');
const memberPageController = require('../controllers/pages/member.page.controller')(nav);
const express = require('express');

const memberRouter = express.Router();

const router = function router() {
  memberRouter.route('/')
    .get(memberPageController.getIndex)
    .post(memberPageController.postMember);
  return memberRouter;
};

module.exports = router;
