//(\n***Question 1***)

for (var i = 0; i < 10; i++) {
    var hOne = document.createElement("h1");
    hOne.setAttribute("id", "hOneText");
    hOne.textContent = "Hello World";
    document.body.appendChild(hOne);
    hOne.style.color = "blue";
    hOne.style.backgroundColor = "yellow";
}

//(/n***Question 2***)
var myUL = document.createElement("ul");
myUL.setAttribute("id", "myArray")
document.body.appendChild(myUL)

var  names = [
     "steve",
     "larry",
     "joe",
     "shirley",
     "steph",
     "nate",
     "rick",
     "emily"
]

var namesList = document.getElementById("myArray")

for (var i = 0; i < names.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = names[i]
    namesList.append(newName)
}