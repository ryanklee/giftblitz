'use strict';

const _ = require('underscore');

const group = [
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
				match: ''
			}
		]
	}
];

function hydrateGroup() {
	group.name = document.getElementById('groupName').value;
	group.deadline = document.getElementById('deadline').value;
	group.msg = document.getElementById('msg').value;
	group.url = document.getElementById('url').value;
}

function matchNames(pool) {
	const matches = {};
	const allNames = _.shuffle(pool);

	allNames.forEach(name => {
		if (name == pool[pool.length - 1]) {
			pool = pool.reverse();
		}
		matches[name] = pool.pop();
	});
	return matches;
}

function readNames() {
	const nameList = [];
	const inputForms = document.getElementById('nameInputs');
	for (let i = 0; i < inputForms.length; i++) {
		nameList.push(inputForms.elements[i].value);
	}
	return nameList;
}

function displayMatches() {
	const nameList = readNames();
	const matches = matchNames(nameList);
	let displayList = '';

	for (const name in matches) {
		displayList += '<p>' + name + ' gets ' + matches[name] + '</p>';
	}
	document.getElementById('list').innerHTML = displayList;
}

