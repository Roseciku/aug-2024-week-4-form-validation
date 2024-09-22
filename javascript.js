
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    // Regular expression to check for at least one lowercase letter, one uppercase letter, and one number
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    return passwordPattern.test(password);
}


let registrationForm= document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event){
     // Prevent the form from submitting
     event.preventDefault();
    // Get the latest input values
let userName= document.getElementById("name").value;
let userEmail= document.getElementById("email").value;
let userPassword= document.getElementById("password").value;
let userAge= document.getElementById("age");
let nameError= document.getElementById("nameError");
let emailError= document.getElementById("emailError");
let passwordError= document.getElementById("passwordError");
let ageError= document.getElementById("ageError");

    // Clear previous error messages
document.getElementById("nameError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";
document.getElementById("ageError").innerHTML = "";

    let isValid=true

    if(!userName){
        nameError.innerHTML="Enter your name";
        isValid=false;
    } 

    if(!userEmail|| !isValidEmail(userEmail)){
        emailError.innerHTML="Enter a Valid email";
        isValid=false;
    }
     if(!userPassword|| userPassword.length <6 || !isValidPassword(userPassword)){
        passwordError.innerHTML="Password should be more that 6 characters and have uppercase,lower case letters and numbers";
        isValid=false;
    }
     if(!userAge|| userAge<0|| userAge>100){
        ageError.innerHTML="Enter a valid age"
        isValid=false;
    }

    if(isValid){
        registrationForm.style.display="none"
    }
})
