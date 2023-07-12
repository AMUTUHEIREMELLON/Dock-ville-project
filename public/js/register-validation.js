const Validate = () => {
  // picking input fields with their names
  let firstName = document.register.firstname;
  let lastName = document.register.lastname;
  let email = document.register.email;
  let carNumberPlate = document.register.carnumberplate;
  let phoneNumber = document.register.phonenumber;
  let sex = document.register.sex;

  // picking error fields
  let firstNameError = document.getElementById("firstnameError");
  let lastNameError = document.getElementById("lastnameError");
  let emailError = document.getElementById("pnameError");
  let errorCarNumberPlate = document.getElementById("gnameError");
  let phoneNumberError = document.getElementById("phonenumberError");
  let sexError = document.getElementById("qnameError");

  // validating  firstname input
  // validating for emptiness
  if (firstName.value == "") {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "please provide your firstname";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length < 2) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent = "first name must be at least 2 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else if (firstName.value.length > 15) {
    firstName.style.border = "2px solid red";
    firstNameError.textContent =
      "first name must not be greate than 15 characters";
    firstNameError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    firstName.focus();
    return false;
  } else {
    firstName.style.border = "2px solid green";
    firstNameError.textContent = "";
    lastName.focus();
  }

  // validating phone number

  if (phoneNumber.value == "") {
    phoneNumber.style.border = "2px solid red";
    phoneNumberError.textContent = "please provide your phone number";
    phoneNumberError.style =
      "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
    phoneNumber.focus();
    return false;
  }

  let phoneRegex = /^[+][2][5][6][0-9]{9}$/;

  if (!phoneRegex.test(phoneNumber.value)) {
    phoneNumber.style.border = "1px solid red";
    phoneNumberError.textContent = "Phone number should start with +256";
    phoneNumberError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phoneNumber.focus();
    return false;
  }
  // validation for Email
  if (email.value == "") {
    email.style.border = "1px solid red";
    emailError.textContent = "Email `is required";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
  let EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value.match(EmailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "The email address should be valid";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    return false;
  }
};
