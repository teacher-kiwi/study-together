import { $ } from './libs/dom.js';

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

$('#theme').addEventListener('click', handleClickThemeBtn);
