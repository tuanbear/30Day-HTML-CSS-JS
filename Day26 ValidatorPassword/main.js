const showPass = document.querySelector(".form_eye");
const formInput = document.querySelector(".form_input input");
const lowerCase = document.querySelector(".lower_case");
const upperCase = document.querySelector(".upper_case");
const number = document.querySelector(".number");
const symbol = document.querySelector(".symbol");
const characters = document.querySelector(".characters");

showPass.addEventListener("click", (e) => {
  e.target.classList.toggle("show");

  formInput.type == "password"
    ? (formInput.type = "text")
    : (formInput.type = "password");
});

formInput.addEventListener("input", (e) => {
  let value = e.target.value;

  value.search(/[a-z]/) >= 0
    ? lowerCase.classList.add("valid")
    : lowerCase.classList.remove("valid");
  value.search(/[A-Z]/) >= 0
    ? upperCase.classList.add("valid")
    : upperCase.classList.remove("valid");
  value.search(/\d/) >= 0
    ? number.classList.add("valid")
    : number.classList.remove("valid");
  value.search(/\W/) >= 0
    ? symbol.classList.add("valid")
    : symbol.classList.remove("valid");
  value.length >= 8
    ? characters.classList.add("valid")
    : characters.classList.remove("valid");
});
