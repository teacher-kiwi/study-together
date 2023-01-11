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

$$('.theme-btn').forEach((btn) =>
  btn.addEventListener('click', handleClickThemeBtn)
);
