function nowClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const clock = document.querySelector("#clock");
  clock.innerText = `${hour}:${minute}:${second}`;
}
nowClock();
setInterval(() => nowClock(), 1000);
