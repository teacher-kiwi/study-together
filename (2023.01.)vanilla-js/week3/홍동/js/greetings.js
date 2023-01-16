import { $ } from './libs/dom.js';
import { paintGreetings } from './libs/paint.js';

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleSubmitLoginBtn(event) {
  event.preventDefault();
  $('#login-form').classList.add(HIDDEN_CLASSNAME);

  const username = $('.login-form-name').value;
  saveUsername(username);
  paintGreetings(username);
  $('.login-form-name').value = '';
}

function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

function handleClickLogout() {
  localStorage.removeItem(USERNAME_KEY);

  $('#login-form').classList.remove(HIDDEN_CLASSNAME);
  $('#greeting').classList.add(HIDDEN_CLASSNAME);
  $('#logout').classList.add(HIDDEN_CLASSNAME);
}

$('#login-form').addEventListener('submit', handleSubmitLoginBtn);
$('#logout').addEventListener('click', handleClickLogout);
