const Group = require('../models/group.server.model');

exports.create = function (req, res) {
  const entry = new Group({
    name: req.body.name,
    deadline: req.body.deadline,
    message: req.body.message
  });
  
  entry.save(function (err){
    if (err) return console.error(err);
  });
};