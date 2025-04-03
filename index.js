let submit = document.getElementById("formSubmit");
submit.onsubmit = (event) => {
  event.preventDefault();
  let form = document.forms.register;
  let fullnameInp = form.elements.fullname;
  let fullnameField = document.getElementById("fullnameField");

  let emailInp = form.elements.email;
  let emailField = document.getElementById("emailField");

  let passwordInp = form.elements.password;
  let passwordField = document.getElementById("passwordField");

  if (fullnameInp.value.trim().length == 0) {
    fullnameField.style.display = "block";
  } else if (emailInp.value.trim() == 0) {
    emailField.style.display = "block";
  } else if (passwordInp.value.trim() == 0) {
    passwordField.style.display = "block";
  } else {
    console.log("success");
  }

  fullnameInp.oninput = () => {
    fullnameField.style.display = "none";
  };
  emailInp.oninput = () => {
    emailField.style.display = "none";
  };
  passwordInp.oninput = () => {
    passwordField.style.display = "none";
  };
};
