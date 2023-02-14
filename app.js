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
    <div class="result-name">
        <p>Son nom: ${cookieData.name}</p>
    </div>
    <div class="result-value">
        <p>Sa valeur: ${cookieData.value}</p>
    </div>
    <div class="display-cross">x</div>
      
    </div>`;

    displayCookies.appendChild(card);
  }
}

function displayError() {
  errorDisplay.textContent = "Aucuns cookies n'as été créés sur ce site.";
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
