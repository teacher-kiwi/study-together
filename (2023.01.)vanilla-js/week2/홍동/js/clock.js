import { $ } from './libs/dom.js';

let week = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

function getClock() {
  const date = new Date();
  getTime(date);
  getDay(date);
}

function getTime(date) {
  const hours = setPadStart(date.getHours());
  const minutes = setPadStart(date.getMinutes());
  $('.clock-time').innerText = `${hours}:${minutes}`;
}

function getDay(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateNum = date.getDate();
  const day = week[date.getDay()];
  $('.clock-day').innerText = `${year}년 ${month}월 ${dateNum}일 ${day}`;
}

function setPadStart(number) {
  return String(number).padStart(2, '0');
}

getClock();
setInterval(getClock, 1000);
