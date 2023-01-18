const loginInput = document.querySelector('.login form input');
const loginForm = document.querySelector('.login form');
const loginFieldset = document.querySelector('.login');
const gameForm = document.querySelector('.game');
const userStatus = document.querySelector('#user div');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

let currentUsername = localStorage.getItem('currentUsername');
let userWin = 0;

function submitUsername(e) {
  e.preventDefault();
  const username = loginInput.value;
  if (localStorage.getItem(username) === null) {
    localStorage.setItem(username, 0);
    currentUsername = username;
  } else {
    userWin = localStorage.getItem(username);
  }
  localStorage.setItem('currentUsername', username);
  loginFieldset.classList.add(HIDDEN_CLASSNAME);
  gameForm.classList.remove(HIDDEN_CLASSNAME);
  trackPointer.innerText = `Hello, ${username} :) `;
  userStatus.innerText = `${currentUsername} 님, 승리 횟수 ${localStorage.getItem(
    currentUsername
  )}번 입니다.`;
}

if (currentUsername === null) {
  loginFieldset.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', submitUsername);
} else {
  gameForm.classList.remove(HIDDEN_CLASSNAME);
  userwin = localStorage.getItem(currentUsername);
  userStatus.innerText = `${currentUsername} 님, 승리 횟수 ${localStorage.getItem(
    currentUsername
  )}번 입니다.`;
}

function onlyNumber(obj) {
  obj.value = obj.value.replace(/[^0-9]/g, '');
}
