document.getElementById("myBtn").addEventListener("click", function () {
    const firstN = document.getElementById("nameF");
    const lastN = document.getElementById("nameL");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const city = document.getElementById("city");
    const dietary = document.getElementById("diet");
    alert(" First Name: " + "" + firstN.value + " \nLast Name: " + "" + lastN.value + " \nAge: " + "" + age.value + " \nGender: " + "" + gender.value + " \nCity: " + "" + city.value + " \nDietary Restrictions: " + "" + dietary.value)

});



/*function getSelected() {
    var restrictions = document.form.restrictions
    var checkedBox = []
    for (let i = 0; i < restrictions.length; i++) {
        if (restrictions[i].checked) {
        checkedBox.push(restrictions[i].value)
        }
    }
    return checkedBox
}
*/