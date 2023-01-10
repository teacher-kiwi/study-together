const $body = document.querySelector('body');
const $themeBtn = document.querySelectorAll('.theme-btn');

function handleClickThemeBtn({ target }) {
  const {
    dataset: { theme },
  } = target;

  $body.className = theme;
  saveTheme(theme);
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

$themeBtn.forEach((btn) => btn.addEventListener('click', handleClickThemeBtn));
