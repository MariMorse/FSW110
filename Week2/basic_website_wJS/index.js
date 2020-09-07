var pageNav = document.createElement("nav");
var navLinkSpace = document.createTextNode(' ');
var navLink1 = document.createElement("a");
var navLink1Txt = document.createTextNode("Home");
navLink1.appendChild(navLink1Txt)
navLink1.href = 'index.html';
pageNav.appendChild(navLink1);
pageNav.appendChild(navLinkSpace);
var navLink2 = document.createElement("a");
var navLink2Txt = document.createTextNode('About Us');
navLink2.appendChild(navLink2Txt)
navLink2.href = 'about.html';
pageNav.appendChild(navLink2);
var navLink3 = document.createElement("a");
var navLink3Txt = document.createTextNode("Services");
pageNav.appendChild(navLink3);
navLink3.href = "services.html";
document.body.append(pageNav);

console.dir(pageNav);

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
document.body.appendChild(footE);

var contact = document.createElement("A");
contact .setAttribute("href", "/url");
var email = document.createTextNode("marianne.morse@bryanuniversity.edu");
contact.appendChild(email);

footE.appendChild(contact);

console.dir(footE);