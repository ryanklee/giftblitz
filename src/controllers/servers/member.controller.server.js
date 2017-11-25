const Group = require('../../models/group.server.model');
const Member = require('../../models/member.server.model');

function create(req, res) {
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
    
    // if (err) return console.log(err);
    // group.members.push(entry);
    // group.save((err) => {
    //   if (err) console.log(err);
    //   return console.log('updated', group, entry);
    // });
  });
}

module.exports = create;
