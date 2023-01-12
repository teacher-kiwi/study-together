import { $ } from './libs/dom.js';

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleSubmitLoginBtn(event) {
  event.preventDefault();
  $('#login-form').classList.add(HIDDEN_CLASSNAME);

  const username = $('.login-form-name').value;
  saveUsername(username);
  paintGreetings(username);
}

function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

function handleLoadWindow() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) return paintGreetings(savedUsername);

  $('#login-form').classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  $('#greeting').innerText = `${username}님 반가워요!`;
  $('#greeting').classList.remove(HIDDEN_CLASSNAME);
}

window.addEventListener('load', handleLoadWindow);
$('#login-form').addEventListener('submit', handleSubmitLoginBtn);
