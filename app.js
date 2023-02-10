const form = document.querySelector("form");
const displayCookies = document.querySelector(".display-result");
const errorMsg = document.querySelector(".error-msg");

const buttonCreat = document.querySelector(".button-creat");
const buttonDisplay = document.querySelector(".button-display");
const inputName = document.querySelector(".input-name");
const inputValue = document.querySelector(".input-value");

buttonCreat.addEventListener("click", handleSubmit);
buttonDisplay.addEventListener("click", handleDisplay);

function handleSubmit(event) {
  event.preventDefault();
  const cookieData = inputName.value + inputValue.value;

  creatCookie();
}

function creatCookie(cookieData) {
  document.cookie = `${inputName.value}=${inputValue.value}`;
}

function handleDisplay(e) {
  e.preventDefault();
  displayCookie();
}
function displayCookie(cookieData) {
  const card = document.createElement("div");
  card.innerHTML = `
  <div class="display-card">
    <div class="result-name">
        <p>Son nom: ${cookieData}</p>
    </div>
    <div class="result-value">
        <p>Sa valeur: ${cookieData}</p>
    </div>
    <div class="display-cross">x</div>
      
    </div>`;
  displayCookies.style.display = "block";
  displayCookies.appendChild(card);
}
