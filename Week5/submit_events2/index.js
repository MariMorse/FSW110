const form = form.passengerInfo

form.addEventListener("submit", (event) => {
    event.preventDefault()

function myalert() {
    const first = form.fName.value;
    const last = form.lName.value;
    const age = form.age.value; 
    const gender = form.gender.value; 
    const cityselect = form.city.value;

    const dietary = [];
        for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
        dietary.push(form.diet[i].value)
    }
        }
    alert(" First Name: " + "" +  first + " \nLast Name: " + "" + last + " \nAge: " + "" + age + " \nGender: " + "" + gender + " \nCity: " + "" + cityselect + " \nDietary Restrictions: " + "" + checkedInput)
}
});