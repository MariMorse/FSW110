var newHeader = document.createElement("h1");
newHeader.textContent = "Welcome to my JS site"
document.body.append(newHeader);



var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"
document.body.append(newP)

var myOL = document.createElement("ol");
console.dir(myOL);

document.getElementsByTagName("ol")[0].setAttribute("id", "myList");




