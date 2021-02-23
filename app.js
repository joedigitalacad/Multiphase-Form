// global variablea
var fullname, username, password, email, number, address, message, age;
// This function will process data to php
function processForm(){

}
// Super function thay holds our DOM
function _(x) {
	return document.getElementById(x);
}
// function to process stage one
function processStageOne() {
	fullname = _('fullname').value;
	username = _('username').value;
	password = _('password').value;
	email = _('email').value;
	number = _('number').value;
	// validate fullname
	if (fullname == "" | (!isNaN(fullname)) || fullname.length <=5) {
		_('fullnameError').innerHTML = "Fullname has some issues. make sure it is greater than 5 character and does not contain numbers";
		return false;
	}
	// username validation
	if ((username =="") || (username.length <=3)) {
		_('usernameError').innerHTML = "Username has some errors.";
		return false;
	}
	// password validation
	if (password == "") {
		_('passwordError').innerHTML = "Password has some errors";
		return false;
	}
	// email validation
	if ((email.indexOf('@')) <=0 || (email == "")) {
		_('emailError').innerHTML = "Email is not valid";
		return false;
	}
	//number validation
	if ((number == "") || (isNaN(number))) {
		_('numberError').innerHTML = "Email is not Valid";
		return false;
	}

	// Hide Stage one view
	_('stageOne').style.display = "none";
	// Show Stage two view
	_('stageTwo').style.display = "block";
}

// process stage two

function processStageTwo() {
	age = _('age').value;
	address = _('address').value;
	// age validation
	if ((age == "") || (isNaN(age))) {
		_('ageError').innerHTML = "Age must be intergers only";
		return false;
	}
	// Address validation
	if (address == "") {
		_('addressError').innerHTML = "Address is notvalid";
		return false
	}

	// Hide Current Stage (Two)
	_('stageTwo').style.display = "none";
	// Show Stage Three
	_('stageThree').style.display = "block";
}

// Process Stage 3 
function processStageThree() {
	message = _('message').value;
	if ((message =="") | (message.length <= 10)) {
		_('messageError').innerHTML = "Message must be longer than 10 characters";
		return false;
	}
	// Hide Current Stage (3)
	_('stageThree').style.display = "none";
	// Show Next Stage (4)
	_('stageFour').style.display = "block";

	// Load all Data to the last stage
	_('popFullname').innerHTML = '<strong>Fullname: </strong>' + fullname;
	_('popUsername').innerHTML = '<strong>Username: </strong>' + username;
	_('popEmail').innerHTML = '<strong>Email: </strong>' + email;
	_('popNumber').innerHTML = '<strong>Number: </strong>' + number;
	_('popAge').innerHTML = '<strong>Age: </strong>' + age;
	_('popAddress').innerHTML = '<strong>Address: </strong>' + address;
	_('popMessage').innerHTML = '<strong>Message: </strong>' + message;
}