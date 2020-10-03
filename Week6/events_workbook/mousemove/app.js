document.getElementsByClassName('red-box')[0].addEventListener('mousemove', function(){
var x = event.clientX;
var y = event.clientY;
var coords = "X coords: " + x + ", Y coords: " + y;
document.getElementsByClassName('red-box')[0].textContent = coords;
});