"use strict";

const btn = document.querySelector("button");
const email = document.getElementById("email");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  validate(email);
  myFunction(email);
});

function validate(input) {
  if (input.value == "") {
    input.parentElement.classList.remove("subscription-box");
    input.parentElement.classList.add("error-state");
  } else {
    input.parentElement.classList.add("subscription-box");
    input.parentElement.classList.remove("error-state");
  }
}

function myFunction() {
  document.getElementById("email").placeholder = "example@email.com";
}
