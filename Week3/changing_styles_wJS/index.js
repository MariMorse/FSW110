for (var i = 0; i < 5; i++) {
    var headTwo = document.createElement("h2"); 
    headTwo.setAttribute("id", "styling");
    headTwo.textContent = "U.S. Army Veteran, Medic!!"; 
    document.body.append(headTwo);
    headTwo.style.fontSize = "20px"; 
    headTwo.style.color = "cornflowerblue";
    headTwo.style.fontWeight = "lighter";
    headTwo.style.fontFamily = "sans serif";
    headTwo.classList.add("border"); 
}