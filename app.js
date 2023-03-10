const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("invalid", handleValidation);
  input.addEventListener("input", handleValidation);
});

function handleValidation(e) {
  if (e.type === "invalid") {
    e.target.setCustomValidity("ce champ ne peut être vide.");
  } else if (e.type === "input") {
    e.target.setCustomValidity("");
  }
}

const form = document.querySelector("form");
const displayCookies = document.querySelector(".display-result");
const errorMsg = document.querySelector(".error-msg");
const errorDisplay = document.querySelector(".error-display");

const buttonCreat = document.querySelector(".button-creat");
const buttonDisplay = document.querySelector(".button-display");
const inputName = document.querySelector(".input-name");
const inputValue = document.querySelector(".input-value");
let name, value;

let cookiesData = [];

buttonCreat.addEventListener("click", handleSubmit);
buttonDisplay.addEventListener("click", handleDisplay);

function handleSubmit(event) {
  event.preventDefault();
  const cookieData = {
    name: inputName.value,
    value: inputValue.value,
  };
  cookiesData.push(cookieData);

  creatCookie(cookieData.name, cookieData.value);
}

function creatCookie(name, value) {
  document.cookie = `${name}=${value}`;
}

function getCookies() {
  return document.cookie.split("; ").map((cookie) => {
    const [name, value] = cookie.split("=");
    return { name, value };
  });
}

function displayCookie() {
  let cookies = getCookies();

  displayCookies.style.display = "block";
  for (const cookieData of cookies) {
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="display-card">
    <div class="div-card-contain">
    <div class="result-name">
        <p><span>Son nom:</span> ${cookieData.name}</p>
    </div>
    <div class="result-value">
        <p><span>Sa valeur:</span> ${cookieData.value}</p>
    </div>
    </div>
    <div class="display-cross">x</div>
      
    </div>`;

    displayCookies.appendChild(card);
  }
}

function displayError() {
  errorDisplay.style.display = "block";
  errorDisplay.textContent = "Aucun cookie n'a été créé sur ce site.";
}

async function handleDisplay(e) {
  e.preventDefault();
  let cookies = document.cookie.split(";");
  if (cookies[0].trim().length === 0) {
    displayError(cookies);
  } else {
    displayCookie(cookies);
  }
  console.log(cookies);
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

displayCookies.addEventListener("click", (e) => {
  if (e.target.classList.contains("display-cross")) {
    const parent = e.target.parentNode;
    const name = parent
      .querySelector(".result-name")
      .textContent.split(":")[1]
      .trim();
    deleteCookie(name);
    parent.remove();
  }
});
