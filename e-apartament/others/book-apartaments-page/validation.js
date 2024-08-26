const form = document.getElementById("form");
const namE = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const checkIn = document.getElementById("check-in");
const checkOut = document.getElementById("check-out");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateInputs()) {
        form.submit();
    }
});


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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidDate = dateString => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return regex.test(dateString);
};

const validateInputs = () => {
    let isValid = true;
    
    const nameValue = namE.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const checkInValue = checkIn.value.trim();
    const checkOutValue = checkOut.value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;

    if (nameValue === "") {
        setError(namE, "Name cannot be blank");
        isValid = false;
    } else if (!nameRegex.test(nameValue)) {
        setError(namE, "Name cannot include numbers or symbols");
        isValid = false;
    } else {
        setSuccess(namE);
    }

    if (surnameValue === "") {
        setError(surname, "Surname cannot be blank");
        isValid = false;
    } else if (!nameRegex.test(surnameValue)) {
        setError(surname, "Surname cannot include numbers or symbols");
        isValid = false;
    } else {
        setSuccess(surname);
    }

    if (emailValue === "") {
        setError(email, "Email cannot be blank");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
        isValid = false;
    } else {
        setSuccess(email);
    }

    const isValidPhoneNumber = (tel) => {
        const retel = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,5}\)?[\s-]?)?[\d\s-]{5,}$/;
        return retel.test(tel);
    };

    if (telValue === "") {
        setError(tel, "Phone number cannot be blank");
        isValid = false;
    } else if (!isValidPhoneNumber(telValue)) {
        setError(tel, "Provide a valid phone number");
        isValid = false;
    } else {
        setSuccess(tel);
    }

    if (checkInValue === "") {
        setError(checkIn, "Check-in date cannot be blank");
        isValid = false;
    } 
     else {
        setSuccess(checkIn);
    }

    if (checkOutValue === "") {
        setError(checkOut, "Check-out date cannot be blank");
        isValid = false;
    } else {
        setSuccess(checkOut);
    }

    return isValid;
};
