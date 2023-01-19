const APIKey = "b134b2942ff9df9df911ecfc5a6c700c";
let IMGKey = "";

function onGeoSuccess(latitude, longitude){
  if('geolocation' in navigator){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data)=>{
      const city = document.querySelector("#weather p:first-child");
      const weather = document.querySelector(`#weather p:nth-child(${2})`);
      const temperature = document.querySelector("#weather p:last-child");
      city.innerText = `장소: ${data.name}`;
      weather.innerText = `날씨: ${data.weather[0].main}`;
      IMGKey = `https://source.unsplash.com/random/?${data.weather[0].main}`;
      changeBackGround(IMGKey);
      temperature.innerText = `기온: ${data.main.temp}`;
    });
  }else{
    onGeoError();
  }
}

function onGeoError(){
  alert('Sorry, no position available.');
}

navigator.geolocation.getCurrentPosition((position)=>{
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  onGeoSuccess(latitude, longitude);
})