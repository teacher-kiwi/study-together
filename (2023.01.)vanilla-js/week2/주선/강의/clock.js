const clock = document.getElementById('clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); 5초마다 반복
// setTimeout(sayHello, 5000); 5초 후에 딱 한번 실행

getClock();
setInterval(getClock, 1000);
