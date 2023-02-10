const form = document.querySelector("form");
const displayCookies = document.querySelector(".display-result");
const errorMsg = document.querySelector(".error-msg");

const buttonCreat = document.querySelector(".button-creat");
const buttonDisplay = document.querySelector(".button-display");
const inputName = document.querySelector(".input-name");
const inputValue = document.querySelector(".input-value");
let name, value;

buttonCreat.addEventListener("click", handleSubmit);
buttonDisplay.addEventListener("click", handleDisplay);

function handleSubmit(event) {
  event.preventDefault();
  const cookieData = inputName.value + inputValue.value;

  creatCookie();
}

function creatCookie(name, value) {
  // const [name, value] = cookieData.split("=");
  nameOf = inputName.value;
  valueOf = inputValue.value;
  document.cookie = `${nameOf}=${valueOf}`;
  // document.cookie = `${inputName.value}=${inputValue.value}`;
}

function handleDisplay(e) {
  e.preventDefault();
  // const cookieData = inputName.value + inputValue.value;
  displayCookie();
}

async function displayCookie() {
  let name, value;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("=");
    name = cookie[0].trim();
    value = cookie[1].trim();
  }

  const card = document.createElement("div");
  card.innerHTML = `
  <div class="display-card">
    <div class="result-name">
        <p>Son nom: ${name}</p>
    </div>
    <div class="result-value">
        <p>Sa valeur: ${value}</p>
    </div>
    <div class="display-cross">x</div>
      
    </div>`;
  console.log(name);
  displayCookies.style.display = "block";
  displayCookies.appendChild(card);
}
