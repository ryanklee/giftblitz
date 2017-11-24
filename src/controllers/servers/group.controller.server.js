const Group = require('../../models/group.server.model');

function create(req, res) {
  const entry = new Group({
    name: req.body.name,
    deadline: req.body.deadline,
    message: req.body.message,
  });
  entry.save();
  console.log('posted in members');
}

module.exports = create;
