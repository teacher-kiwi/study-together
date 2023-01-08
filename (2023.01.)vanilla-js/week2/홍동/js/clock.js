const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = setPadStart(date.getHours());
  const minutes = setPadStart(date.getMinutes());
  const seconds = setPadStart(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function setPadStart(number) {
  return String(number).padStart(2, '0');
}

getClock();
setInterval(getClock, 1000);
