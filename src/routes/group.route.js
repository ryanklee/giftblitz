const nav = require('../views/nav');
const groupPageController = require('../controllers/pages/group.page.controller')(nav);
const express = require('express');

const groupRouter = express.Router();

const router = function router() {
  groupRouter.route('/')
    .get(groupPageController.getIndex)
    .post(groupPageController.postGroup);
  return groupRouter;
};

module.exports = router;
