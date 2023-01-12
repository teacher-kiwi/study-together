const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const userName = document.querySelector('h1');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  painGreetings(username);
}

function painGreetings(username) {
  userName.classList.remove(HIDDEN_CLASSNAME);
  userName.innerText = `Hello, ${username}`;
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  painGreetings(savedUsername);
}
