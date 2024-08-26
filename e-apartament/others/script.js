const icon = document.getElementById("icon");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.getElementById("loginForm");
const errorInputEmail = document.getElementById("email-input");
const errorInputPassword = document.getElementById("password-input");
const errorMessageEmail = document.getElementById("error-message-email");
const errorMessagePassword = document.getElementById("error-message-password");

icon.onclick = function() {
  if (password.type === "password") {
    password.type = "text";
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  } else {
    password.type = "password";
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  }
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isEmailValid = validateEmail(email.value);
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    // Submit the form if both email and password are valid
    form.submit();
  }
});

password.addEventListener('input', function() {
  if (password.value.length > 30) {
    password.value = password.value.slice(0, 30);
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email === "") {
    errorMessageEmail.innerHTML = "Email cannot be blank";
    errorInputEmail.classList.add("error-input");
    errorInputEmail.classList.remove("sucsses-input");
    return false;
  } 
  
  const isValid = re.test(String(email).toLowerCase());

  if (isValid) {
    errorInputEmail.classList.remove("error-input");
    errorInputEmail.classList.add("sucsses-input");
    errorMessageEmail.innerHTML = "";
  } else {
    errorMessageEmail.innerHTML = "Invalid email address";
    errorInputEmail.classList.add("error-input");
    errorInputEmail.classList.remove("sucsses-input");
  }

  return isValid;
}

function validatePassword() {
  const isValid = password.value.length >= 8 && password.value.length <= 30;

  if (password.value === "") {
    errorMessagePassword.innerHTML = "Password cannot be blank";
    errorInputPassword.classList.add("error-input");
    errorInputPassword.classList.remove("sucsses-input");
    return false;
  } else if (isValid) {
    errorMessagePassword.innerHTML = "";
    errorInputPassword.classList.add("sucsses-input");
    errorInputPassword.classList.remove("error-input");
  } else if (password.value.length < 8) {
    errorMessagePassword.innerHTML = "The password must have at least 8 characters";
    errorInputPassword.classList.add("error-input");
    errorInputPassword.classList.remove("sucsses-input");
  } else if (password.value.length >= 30) {
    errorMessagePassword.innerHTML = "The password cannot have more than 30 characters";
    errorInputPassword.classList.add("error-input");
    errorInputPassword.classList.remove("sucsses-input");
  }

  return isValid;
}








const setError= (element,message) => {
  const inputContainer = element.parentElement;
  const errorMsg = inputContainer.querySelector(".error");

  errorMsg.innerText = message;
} 


const setSuccess = element => {
  const inputContainer = element.parentElement;
  const errorMsg = inputContainer.querySelector(".error");

  errorMsg.innerText = "";
}