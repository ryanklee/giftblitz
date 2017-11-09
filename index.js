const _ = require('underscore');

nameList = ['a', 'b', 'c', 'e', 'f', 'g']

function matchNames(pool){
    matches = {};
    var allNames = _.shuffle(pool);
    
    allNames.forEach(name => {
        if (name == pool[pool.length - 1]) { pool = pool.reverse(); }
        matches[name] = pool.pop();
    })

    return matches;
}

matchList = matchNames(nameList);

console.log(matchList);


