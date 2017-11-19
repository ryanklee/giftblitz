'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
  email: String,
  createdOn: { type: Date, default: Date.now },
  match: {type: Schema.Types.ObjectId, default: null}
});

module.exports = mongoose.model('Member', memberSchema);