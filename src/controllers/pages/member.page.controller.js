'use strict';

const memberPortalController = function (nav) {
	const getIndex = function (req, res) {
		res.render('member', {
			Title: 'CREATE MEMBER',
			Nav: nav
		});
	};

	const postMember = function (req, res) {
		const memberController = require('./servers/member.controller.server');
		res.redirect('/member');
		return memberController.create(req, res);
	};

	return {
		getIndex,
		postMember
	};
};

module.exports = memberPortalController;
