const form = document.querySelector("form");
const displayCookies = document.querySelector(".display-result");
const errorMsg = document.querySelector(".error-msg");

const buttonCreat = document.querySelector(".button-creat");
const inputName = document.querySelector(".input-name");
const inputValue = document.querySelector(".input-value");

buttonCreat.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const cookieData = inputName.value + inputValue.value;
  console.log(cookieData);
}
