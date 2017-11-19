const Member = require ('../models/member.server.model.js');

exports.create = function(req, res) {
  const entry = new Member({
    name: {
      first: req.body.first,
      last: req.body.last,
    },
    email: req.body.email
  });
  entry.save();    
};