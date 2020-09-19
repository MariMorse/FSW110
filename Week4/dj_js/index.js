//MouseOver
document.getElementById("square").addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
});
addEventListener("keydown", function(event) {
    if (event.keyCode == 66)
      square.style.background = "blue";
});
//MouseDown
document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
});
addEventListener("keydown", function(event) {
    if (event.keyCode == 82)
      square.style.background = "red";
});
//MouseUp
document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
});
addEventListener("keydown", function(event) {
    if (event.keyCode == 89)
      square.style.background = "yellow";
});
document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
});
addEventListener("keydown", function(event) {
    if (event.keyCode == 71)
      square.style.background = "green";
});
window.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange"; 
});
addEventListener("keydown", function(event) {
    if (event.keyCode ==79)
      square.style.background = "orange";
});