// Store tha variables

const form = document.getElementById('registrerForm');

let userName = document.getElementById('userName');
let email = document.getElementById('email');
let province = document.getElementById('province');
let password1 = document.getElementById('pass1');
let password2 = document.getElementById('pass2');

// Functions

function validate() {
    // We use it to return a boolean value about the validation of the form (see conditional below)
    let errorCounter = 0; 

    form.classList.remove('is-invalid'); // Remove class before check the data

    if (userName.value == "") {
        // Change the class of the form to 'is-invalid' so it doesn't allow to send it and show error.
		userName.classList.add("is-invalid");
		document.getElementById("errorName").textContent = "Error";
        errorCounter++;
    }

    if (userName.value.length < 3) {
        userName.classList.add("is-invalid");
        document.getElementById("errorName").textContent = "Error";
        errorCounter++;
    }

    if(email.value == "") {
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Error";
        errorCounter++;
    }else if(!validateEmail(email.value)){
		email.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Error";
		errorCounter++;
	}

    if(province.value == "") {
		province.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Error";
		errorCounter++;
	}

    if(password1.value == "") {
		password1.classList.add("is-invalid");
		document.getElementById("errorPass1").textContent = "Error";
		errorCounter++;
	}

    if (password2.value == "") {
        password2.classList.add("is-invalid");
		document.getElementById("errorPass2").textContent = "Error";
		errorCounter++;
    }
    if (password2.value != password1.value) {
        password2.classList.add("is-invalid");
		document.getElementById("errorPass2").textContent = "Error";
		errorCounter++;
    }

    if (errorCounter > 0){
        return false;
    }else{
		return true;
	}    
}

function validateEmail(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}



//Event listeners

form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

// To prevent the form to refresh if it works correctly
document.getElementById('registrerForm').addEventListener('submit', function(e) {
    e.preventDefault();
});
