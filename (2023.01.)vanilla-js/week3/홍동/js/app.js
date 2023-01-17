import { $, $$ } from './libs/dom.js';
import { paintGreetings, paintTodos } from './libs/paint.js';

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleLoadWindow() {
  loadGreetings();
  loadTheme();
  loadTodos();
}

function loadTodos() {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));

  if (!savedTodos) return;
  paintTodos(savedTodos);
}

function loadGreetings() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername) return paintGreetings(savedUsername);

  $('#login-form').classList.remove(HIDDEN_CLASSNAME);
}

function loadTheme() {
  const theme = localStorage.getItem('theme') || 'white';
  $('body').className = theme;
  const selectedBtn = findSelectedBtn(theme);
  selectedBtn.classList.toggle('selected-theme');
}

function findSelectedBtn(theme) {
  return [...$$('.theme-btn')].filter((btn) => {
    return theme === btn.dataset.theme;
  })[0];
}

window.addEventListener('load', handleLoadWindow);
