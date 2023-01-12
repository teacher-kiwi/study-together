import { $, $$ } from './libs/dom.js';

function handleClickThemeBtn({ target }) {
  const {
    dataset: { theme },
  } = target;

  $('body').className = theme;
  saveTheme(theme);
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
}

$$('.theme-btn').forEach((btn) =>
  btn.addEventListener('click', handleClickThemeBtn)
);
window.addEventListener('load', handleLoadWindow);
