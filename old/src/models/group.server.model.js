const mongoose = require('mongoose');

const { Schema: NewSchema } = mongoose;

const memberSchema = new NewSchema({
  name: {
    first: String,
    last: String,
  },
  email: String,
  fired: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  assignment: { type: NewSchema.Types.ObjectId, default: null }
});

const groupSchema = new NewSchema({
  name: String,
  deadline: Date,
  message: String,
  pastDeadline: { type: Boolean, default: false },
  url: { type: String, default: null },
  createdOn: { type: Date, default: Date.now },
  members: { type: [memberSchema], default: null },
});

module.exports = mongoose.model('Group', groupSchema);
