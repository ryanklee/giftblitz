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
  match: { type: NewSchema.Types.ObjectId, default: null },
});

module.exports = mongoose.model('Member', memberSchema);
