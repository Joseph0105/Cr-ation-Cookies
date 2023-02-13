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
  displayCookies.style.display = "block";
  const cookies = getCookies();
  for (const cookieData of cookies) {
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="display-card">
    <div class="result-name">
        <p>Son nom: ${cookieData.name}</p>
    </div>
    <div class="result-value">
        <p>Sa valeur: ${cookieData.value}</p>
    </div>
    <div class="display-cross">x</div>
      
    </div>`;
    console.log(cookiesData);

    displayCookies.appendChild(card);
  }
}

function displayError(cookies) {
  if (cookies.length === 0) {
    errorDisplay.textContent = "Aucuns cookies n'a été crée sur ce site.";
  } else {
    errorDisplay.textContent = "";
  }
}

async function handleDisplay(e) {
  e.preventDefault();
  const cookies = getCookies();
  displayError(cookies);
  displayCookie(cookies);
}
