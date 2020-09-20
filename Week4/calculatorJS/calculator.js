var hOne = document.createElement("h1")
hOne.textContent = "Marianne's Javascript Calculator"
document.body.append(hOne);


function additionBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondnumber").value;
        document.getElementById("result").innerHTML = num1 + num2;
}