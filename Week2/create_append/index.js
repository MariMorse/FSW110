var newHeader = document.createElement("h1")
newHeader.textContent = "Welcome to my JS site"
document.body.append(newHeader)

var newP = document.createElement("p")
newP.textContent = "All of this was created with JavaScript"
document.body.append(newP)

let items = ['Happy', 'Sad', 'Sunshine', 'Rain'],

ol = document.createElement('ol');

document.getElementById('myOList').appendChild(ol);

items.forEach(function (item) {
    let li = document.createElement('li');
    ol.appendChild(li);

    li.innerHtml += item;
});