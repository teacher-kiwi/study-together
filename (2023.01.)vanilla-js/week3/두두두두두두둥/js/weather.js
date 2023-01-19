const API_KEY = "0c341a13cfa4e941d041b2672f699816";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather > span:nth-child(1)");
      const city = document.querySelector("#weather > span:nth-child(3)");
      const cityName = data.name;
      const weatherData = data.weather[0].description;
      weather.innerText = weatherData;
      city.innerText = cityName;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
