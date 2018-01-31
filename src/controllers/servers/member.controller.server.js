const Group = require('../../models/group.server.model');
const Member = require('../../models/member.server.model');

exports.create = function create(req, res) {
  const entry = new Member({
    name: {
      first: req.body.firstname,
      last: req.body.lastname,
    },
    email: req.body.email,
  });

  Group.findOne({ name: req.body.group }, (err, group) => {
    group.members.push(entry);
    group.save();
  });
};

