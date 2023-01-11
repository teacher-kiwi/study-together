const loginInput = document.querySelector('.login form input');
const loginForm = document.querySelector('.login form');
const loginFieldset = document.querySelector('.login');
const gameForm = document.querySelector('.game');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function submitUsername(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginFieldset.classList.add(HIDDEN_CLASSNAME);
  gameForm.classList.remove(HIDDEN_CLASSNAME);
  trackPointer.innerText = `Hello, ${username} :) `;
}

if (savedUsername === null) {
  loginFieldset.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', submitUsername);
} else {
  gameForm.classList.remove(HIDDEN_CLASSNAME);
}
