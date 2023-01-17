function onGeoOk({ coords: { latitude: lat, longitude: lng } }) {
  console.log(lat, lng);
}

function onGeoError() {
  alert('당신을 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
