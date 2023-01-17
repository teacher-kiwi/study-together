import { $ } from './libs/dom.js';

const API_KEY = '58f5d487b06fd096821ef170a3d65d47';

function onGeoOk({ coords: { latitude: lat, longitude: lon } }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then(({ name, weather }) => {
      $('#weather').insertAdjacentHTML(
        'beforeend',
        `<span>${weather[0].main}</span>`
      );
    });
}

function onGeoError() {
  alert('당신을 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
