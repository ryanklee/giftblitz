'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: String,
  deadline: Date,
  message: String,
  url: { type: String, default: null},
  createdOn: { type: Date, default: Date.now },
  members: {type: [Schema.memberSchema], default: null}
});

module.exports = mongoose.model('Group', groupSchema);