function matchNames(pool){
    matches = {};
    var allNames = _.shuffle(pool);
    
    allNames.forEach(name => {
        if (name == pool[pool.length - 1]) { pool = pool.reverse(); }
        matches[name] = pool.pop();
    })
    return matches;
}

function readNames(){
    var nameList = [];
    var inputForms = document.getElementById("nameInputs");
    for (var i = 0; i < inputForms.length; i++){
        nameList.push(inputForms.elements[i].value);
    }
    return nameList;
}

function displayMatches(){
    var nameList = readNames();
    var matches = matchNames(nameList);
    var displayList = "";

    for (name in matches){
        displayList += "<p>" + name +  " gets " + matches[name] + "</p>";
    }
    document.getElementById("list").innerHTML = displayList;
}

function checkAddInput() {
    var container = document.querySelectorAll('.container');
    var inputBox = document.querySelector('.inputBox');
    // var inputForm = `<input type="text" name="n1" oninput="checkAddInput()">`
    // console.log(container, inputBox);
    // document.getElementById("nameInputs").innerHTML = inputForm;
    var nameInputsSel = document.querySelectorAll('input');
    console.log("here");
//check if first char input
//if yes, add another input,
//if not, do nothing

//check if input results in empty text box,
//if yes, remove added input
}



