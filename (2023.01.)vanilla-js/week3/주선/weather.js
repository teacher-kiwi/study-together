const URL = 'https://yesno.wtf/api';
const yesnoButton = document.querySelector('#ynbtn');
const hi = document.querySelector('.hidden');

function makeYesno() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let answer = data.answer;
      let image = data.image;
      document.querySelector('#ynans').innerText = answer;
      document.querySelector('#ynimg').src = image;
    });
}

yesnoButton.addEventListener('click', () => {
  hi.classList.toggle('hidden');
  makeYesno();
});
