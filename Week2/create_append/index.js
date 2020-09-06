var newHeader = document.createElement("h1");
newHeader.textContent = "Welcome to my JS site"
document.body.append(newHeader);



var newP = document.createElement("p");
newP.textContent = "All of this was created with JavaScript"
document.body.append(newP);

var myList = document.createElement("ol")
myList.setAttribute("id", "myOL")
document.body.appendChild(myList);

var newLiOne = document.createElement("li")
document.getElementById("myOL")
myList.append(newLiOne);

var newLiTwo = document.createElement("li")
document.getElementById("myOL")
myList.append(newLiTwo);

var newLi3 = document.createElement("li")
document.getElementById("myOL")
myList.append(newLi3);
console.dir(myList);

var lI3 = document.getElementById("myOL")
newLiOne.textContent = "Bedtime!!"
myList.appendChild(newLiOne);




