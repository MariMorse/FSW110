var navBar = document.createElement("nav");
document.body.appendChild(navBar);
console.dir(navBar);

var anchorOne = document.createElement("A");
anchorOne .setAttribute("href", "/html");
var txt1 = document.createTextNode("Home");
anchorOne.appendChild(txt1);

navBar.appendChild(anchorOne);

var anchorTwo = document.createElement("A");
anchorTwo .setAttribute("href", "/html");
var txt2 = document.createTextNode("Products");
anchorTwo .appendChild(txt2);

navBar.appendChild(anchorTwo);

var anchorThree = document.createElement("A");
anchorThree .setAttribute("href", "/html");
var txt3 = document.createTextNode("About");
anchorThree .appendChild(txt3);

navBar.appendChild(anchorThree);
document.body.appendChild(navBar);

var headTag = document.createElement("h1");
headTag .setAttribute("id", "header");
document.body.appendChild(headTag);

console.dir(headTag);

var editH1 = document.getElementById("header").innerHTML = "Happy Labor Day!!";

var para = document.createElement("p");
para .setAttribute("id", "paragraph");
document.body.appendChild(para);

console.dir(para);

var pTxt = document.getElementById("paragraph");
var pAppend = document.createTextNode ("I have to say that so far I really like Javascript. DOM is a little more complicated to understand, but I feel that I am catching on. Well, this weekend is Labor Day weekend and I am going to relax!! ");

pTxt.appendChild(pAppend);

var oList = document.createElement("oL");
oList.setAttribute("id", "myOL");
document.body.appendChild(oList);

var lItem1 = document.createElement("li");
document.getElementById("myOL");
oList.append(lItem1);

var lItem2 = document.createElement("li");
document.getElementById("myOL");
oList.append(lItem2);

var lItem3 = document.createElement("li");
document.getElementById("myOL");
oList.append(lItem3);

console.dir(oList);

lItem1.textContent = "HTML";
oList.append(lItem1);

lItem2.textContent = "JavaScript";
oList.append(lItem2);

lItem3.textContent = "DOM";
oList.append(lItem3);

var footE = document.createElement("footer");
footE .setAttribute("id", "fElement");





