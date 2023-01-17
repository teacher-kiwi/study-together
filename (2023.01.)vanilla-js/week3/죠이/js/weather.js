const API_KEY = "a83845622fb89f98cb319324d7bc57f2";

function onGeoOk(position) {
  // const lat = position.coords.latitude;
  // const lon = position.coords.longitude;
  const lat = 37.6342;
  const lon = 127.1179;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function onGeoError() {
  // alert("Can't find you. No weather for you.");
  const lat = 37.6342;
  const lon = 127.1179;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `(${data.name})`;
      weather.innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png alt="Weather Image" width="50"> ${data.main.temp}°C `;
      console.log(data);
    });
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
