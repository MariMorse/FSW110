var newHeader = document.createElement("h1")
newHeader.textContent = "Welcome to my JS site"
document.body.append(newHeader)

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"
document.body.append(newP)

var newList = document.createElement("ol");

var listItem1 = document.createElement("li");
listItem1.innerHTML = ("HTML");
listItem1.appendChild(newList);

var listItem2 = document.createElement("li")
listItem2.innerHTML = ("Javascript");
listItem2.appendChild(newList);

var listItem3 = document.createElement("li");
listItem3.innerHTML = ("DOM");
listItem3.appendChild(newList);

