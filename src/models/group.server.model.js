'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
	name: {
		first: String,
		last: String
	},
	email: String,
	fired: {type: Boolean, default: false},
	createdOn: {type: Date, default: Date.now},
	match: {type: Schema.Types.ObjectId, default: null}
});

const groupSchema = new Schema({
	name: String,
	deadline: Date,
	message: String,
	fired: {type: Boolean, default: false},
	url: {type: String, default: null},
	createdOn: {type: Date, default: Date.now},
	members: {type: [memberSchema], default: null}
});

module.exports = mongoose.model('Group', groupSchema);
