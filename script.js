const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstName", "First Name cannot be empty");
  } else {
    removeErrorFrom("firstName");
  }

  if (lastName === "") {
    addErrorTo("lastName", "Last Name cannot be empty");
  } else {
    removeErrorFrom("lastName");
  }

  if (email === "") {
    addErrorTo("email", "Email cannot be empty");
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeErrorFrom("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.opacity = 1;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
  small.style.opacity = 0;
}

function isValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
