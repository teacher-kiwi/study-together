import { $, $$ } from './libs/dom.js';

function handleClickThemeBtn({ target }) {
  const {
    dataset: { theme },
  } = target;

  $('body').className = theme;
  saveTheme(theme);
  toggleSelectedTheme(target);
}

function toggleSelectedTheme(target) {
  $('.selected-theme').classList.toggle('selected-theme');
  target.classList.toggle('selected-theme');
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

function handleLoadWindow() {
  loadTheme();
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  $('body').className = theme;
  const selectedBtn = findSelectedBtn(theme);
  selectedBtn.classList.toggle('selected-theme');
}

function findSelectedBtn(theme) {
  return [...$$('.theme-btn')].filter((btn) => {
    return theme === btn.dataset.theme;
  })[0];
}

$('#theme').addEventListener('click', handleClickThemeBtn);
window.addEventListener('load', handleLoadWindow);
