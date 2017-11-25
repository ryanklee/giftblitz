const Member = require('../../models/member.server.model.js');

function create(req, res) {
  const entry = new Member({
    name: {
      first: req.body.first,
      last: req.body.last,
    },
    email: req.body.email,
  });
  entry.save();
}

module.exports = create;
