let location = document.getElementsByClassName('red-box')[0]

let x = event.clientX;
let y = event.clientY;

location.addEventListener('mousemove', function(){
    var location = "X coords: " + x + ", Y coords: " + y;
});