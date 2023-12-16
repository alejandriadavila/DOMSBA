// Making the header Title
const headingEl = document.querySelector("header")
const h1 = document.createElement("h1")
h1.innerText = "Baby Park Tournament Sign Ups"
headingEl.appendChild(h1)
headingEl.classList.add("flex-center")

// Create the form
const formCont = document.getElementById("formContainer")
const inputs = [discTag = {type: "input", placeholder: "Discord Tag"}, email = {type: "input", placeholder: "Email"}, nameField = {type: "input", placeholder: "Name"}]

// put each field in it's own div for css styling
for(let i = 0; i < inputs.length; i++){
    let div
    div = document.createElement("div")
    newInput = document.createElement(inputs[i].type)
    newInput.placeholder = inputs[i].placeholder
    div.appendChild(newInput)
    formCont.prepend(div)
}

const button = document.createElement("button")
button.innerText = "Submit"
formCont.appendChild(button)
// Adding the event listener
formCont.addEventListener("submit", validate)

// function to validate the email, name, and discord tag fields
function validate(evt) {
  const nameVal = validateName()
  if (nameVal === false) {
    evt.returnValue = false
    return false
  }

  const emailVal = validateEmail()
  if (emailVal === false) {
    evt.returnValue = false
    return false
  }

  const discordVal = validateDiscord()
  if (discordVal === false) {
    evt.returnValue = false
    return false
  }
  alert(`Thank you for your submission! We will be sure to reach out to you!`)
  return true
}

function validateEmail() {
  let emailVal = email.value
  if (emailVal === "") {
    alert(`An email is required. Please include one!`)
    email.focus()
    return false
  }
  return emailVal
}

function validateName() {
  if (nameField.value === "") {
    alert(`Please provide your name. It's required.`)
    nameField.focus()
    return false
  }
  return nameField.value
}

function discordVal() {
  if (discTag.value === "") {
    alert(`Discord Tags are required so please include yours before submitting`)
    discTag.focus()
    return false
  }
  return discTag.value
}

