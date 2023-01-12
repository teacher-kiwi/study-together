const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = setPadStart(date.getHours());
  const minutes = setPadStart(date.getMinutes());
  clock.innerText = `${hours}:${minutes}`;
}

function setPadStart(number) {
  return String(number).padStart(2, '0');
}

getClock();
setInterval(getClock, 1000);
