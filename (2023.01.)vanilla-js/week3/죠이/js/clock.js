const clock = document.querySelector("h2#clock");
const title = document.querySelector("#title");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const month = date.getMonth();
  const day = date.getDate();
  const weekNum = date.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  title.innerText = `${month + 1}월 ${day}일 [${
    week[weekNum]
  }] 1인 1역 (${hours}시 ${minutes}분)`;
}

setInterval(getClock, 1000);
