var hOne = document.createElement("h1")
hOne.textContent = "Marianne's Javascript Calculator"
document.body.append(hOne);

function addNum() {
    var val1 = parseInt(document.getElementById("value1").value);
    var val2 = parseInt(document.getElementById("value2").value);
    var ansD = document.getElementById("answer");
    ansD.value = val1 + val2;
}

function subtract() {
    var valOne = parseInt(document.getElementById("valueOne").value);
    var valTwo = parseInt(document.getElementById("valueTwo").value);
    var ans2 = document.getElementById("answer2");
    ans2.value = valOne - valTwo;
}