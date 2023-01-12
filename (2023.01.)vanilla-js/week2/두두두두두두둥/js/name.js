const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const savedUsername = localStorage.getItem("username");
const windowName = document.querySelector("#name");

function onLoginBtn(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  windowName.classList.remove("hidden");
  windowName.classList.add("fade-in");
  windowName.innerText = `Hello ${username}`;
}

if (savedUsername == null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginBtn);
} else {
  paintGreeting(savedUsername);
}
