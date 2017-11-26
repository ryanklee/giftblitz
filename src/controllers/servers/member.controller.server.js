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
  });
}

function addMatch(groupID, matchedPairs) {

  Object.keys(matchedPairs).forEach((memberID) => {

    Group.findOneAndUpdate(
      { _id: groupID, 'members._id': memberID },
      {
        $set: {
          'members.$.match': matchedPairs[memberID],
        },
      }, (err, doc) => {
        if (err) console.log(err);
      },
    );
  });
}

module.exports = (create, addMatch);
