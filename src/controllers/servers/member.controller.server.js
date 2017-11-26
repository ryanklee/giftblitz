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

function addMatch(groupID, memberIndex, matchID) {
  // console.log(groupID, memberIndex, matchID);
  Group.findById(groupID, (err, group) => {
    group.members[memberIndex].set({ match: matchID });
    group.save();
  });
}

// function getMatch(groupID, memberIndex, matchID) {
//   Group.findById(groupID, (err, group) => {
//     const match = group.members[memberIndex].match;

//   });
// }

module.exports = (create, addMatch);
