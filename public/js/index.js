// import "jsonfile";
const _ = require('underscore');

let group = [
  {
    id: '',
    name: '',
    deadline: '',
    msg: '',
    url: '',
    members: [
      {
        id: '',
        name: '',
        email: '',
        url: '',
        link: '',
        match: '',
      },
    ],
  },
];

function hydrateGroup() {
  group.name = document.getElementById('groupName').value;
  group.deadline = document.getElementById('deadline').value;
  group.msg = document.getElementById('msg').value;
  group.url = document.getElementById('url').value;
}

function matchNames(pool) {
  let matches = {};
  let allNames = _.shuffle(pool);

  allNames.forEach((name) => {
    if (name == pool[pool.length - 1]) { pool = pool.reverse(); }
    matches[name] = pool.pop();
  });
  return matches;
}

function readNames() {
  let nameList = [];
  let inputForms = document.getElementById('nameInputs');
  for (let i = 0; i < inputForms.length; i++) {
    nameList.push(inputForms.elements[i].value);
  }
  return nameList;
}

function displayMatches() {
  let nameList = readNames();
  let matches = matchNames(nameList);
  let displayList = '';

  for (let name in matches) {
    displayList += '<p>' + name + ' gets ' + matches[name] + '</p>';
  }
  document.getElementById('list').innerHTML = displayList;
}



