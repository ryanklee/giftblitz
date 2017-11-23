'use strict';
const express = require('express');

const groupRouter = express.Router();

const router = function (nav) {
	const groupPageController = require('../controllers/pages/group.page.controller')(nav);

	groupRouter.route('/')
    .get(groupPageController.getIndex)
    .post(groupPageController.postGroup);

	return groupRouter;
};

module.exports = router;
