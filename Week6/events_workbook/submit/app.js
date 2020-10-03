// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
document.getElementById("submit-me").addEventListener("submit", (event) => {
   event.preventDefault()  
});

document.getElementById("name").setAttribute("name", "user_name");

document.getElementById("name").setAttribute("id", "first-name");

/*There is a lot you can do with form, and a lot that browsers and browser extentions can do if you give your form the correct attributes

Add a name attributes to the input name="user_name". Try changing the ID to "first-name". 
Chrome defaults to remembering what you've put into inputs. 
If multiple websites share inputs with the same atrributes, browsers try to give relevent suggestions or autofill. 


Explore some of the input types: 

number
date
color
range
radio
checkbox
*/