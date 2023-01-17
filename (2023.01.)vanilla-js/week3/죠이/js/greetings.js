const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const changeBtn = document.querySelector("#changeBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인값 받아와서 인사말 보이기
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  changeBtn.classList.remove(HIDDEN_CLASSNAME);
}

//이름 바꾸기
function changeUsername() {
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  changeBtn.classList.add(HIDDEN_CLASSNAME);
}

changeBtn.addEventListener("click", changeUsername);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  changeBtn.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}
