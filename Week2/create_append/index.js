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
myList.append(newLi3)

console.dir(myList);


newLiOne.textContent = "Bedtime!!"
myList.append(newLiOne);

newLiTwo.textContent = "Sleepy!!"
myList.append(newLiTwo);

newLi3.textContent = "Going To BED!! Goodnight!!"
myList.append(newLi3);




