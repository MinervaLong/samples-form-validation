// Store tha variables

const form = document.getElementById('loginForm');

let email = document.getElementById('email');
let password = document.getElementById('pass');
let errorEmail = document.getElementById("errorEmail");
let errorPass = document.getElementById("errorPass");

function validate() {
    let validation = true; //If there is an error in the next validations it changes to false
    
    if(email.value == "") {
        email.style.border = "3px solid red";
        errorEmail.textContent = "This field cannot be empty";
        email.focus();
        validation = false;
    }else if (!validateEmail(email.value)) {
        email.style.border = "3px solid red";
        errorEmail.textContent = "This email doesn't have the correct format";
        email.focus();
        validation = false;
    }else {
        email.style.border = "3px solid green";
        errorEmail.textContent = "Looks good!";
    }

    if(password.value == "") { 
        password.style.border = "3px solid red";       
        errorPass.textContent = "This field cannot be empty";
        password.focus();
        validation = false;
    }else if (!validatePass(password.value)){
        password.style.border = "3px solid red";
        errorPass.textContent = "It should have a capital letter, a number and at least 8 characters long.";
        password.focus();
        validation = false;
    } else {
        password.style.border = "3px solid green";
        errorPass.textContent = "Looks good!";
    }

    return validation;

}

function validateEmail(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validatePass(password) {
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passRegex.test(password) ? true : false;
}


// To prevent the form to refresh if it works correctly
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
});
    



// ANOTHER TYPE OF VALIDATION. Event Listener to test the data before clicking 'Submit'

email.addEventListener('change', emailVerify);
password.addEventListener('change', passVerify);

// Functions invoked

function emailVerify() {
    if(email.value == "") {
        email.style.border = "3px solid red";
        errorEmail.textContent = "This field cannot be empty";
        email.focus();
    }else if (!validateEmail(email.value)) {
        email.style.border = "3px solid red";
        errorEmail.textContent = "This email doesn't have the correct format";
        email.focus();
    }else {
        email.style.border = "3px solid green";
        errorEmail.textContent = "Looks good!";
    }
}

function passVerify() {
    if(password.value == "") {  
        password.style.border = "3px solid red";      
        errorPass.textContent = "This field cannot be empty";
        password.focus();
    }else if (!validatePass(password.value)){
        password.style.border = "3px solid red";
        errorPass.textContent = "It should have a capital letter, a number and at least 8 characters long.";
        password.focus();
    }
    else {
        password.style.border = "3px solid green";
        errorPass.textContent = "Looks good!";
    }
}