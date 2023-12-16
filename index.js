// Making the header Title
const headingEl = document.querySelector("header")
const h1 = document.createElement("h1")
h1.innerText = "Baby Park Tournament Sign Ups"
headingEl.appendChild(h1)
headingEl.classList.add("flex-center")

// Create the form
const formCont = document.getElementById("formContainer")
const discTag = document.createElement("input")
discTag.placeholder = "Discord Tag"
formCont.prepend(discTag)
const email = document.createElement("input")
email.placeholder = "email"
formCont.prepend(email)
const nameField = document.createElement("input")
nameField.placeholder = "Name"
formCont.prepend(nameField)
const button = document.createElement("button")
button.innerText = "Submit"
formCont.appendChild(button)

formCont.addEventListener("submit", validate);

function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const discordVal = validateDiscord();
  if (discordVal === false) {
    evt.returnValue = false;
    return false;
  }
  alert(`Thank you for your submission! We will be sure to reach out to you!`);
  return true;
}

function validateEmail() {
  let emailVal = email.value;
  if (emailVal === "") {
    alert(`An email is required. Please include one!`);
    email.focus();
    return false;
  }
  return emailVal;
}

function validateName() {
  if (nameField.value === "") {
    alert(`Please provide your name. It's required.`);
    nameField.focus();
    return false;
  }
  return nameField.value;
}

function discordVal() {
  if (discTag.value === "") {
    alert(`Discord Tags are required so please include yours before submitting`);
    discTag.focus();
    return false;
  }
  return discTag.value;
}

