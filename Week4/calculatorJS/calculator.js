var hOne = document.createElement("h1")
hOne.textContent = "Marianne's Javascript Calculator"
document.body.append(hOne);

function adding() {

document.getElementById("first").value= " "
document.getElementById("second").value= " ";
document.getElementById("answer").value= " "; 

}
document.getElementById("add").addEventListener("click", adding);