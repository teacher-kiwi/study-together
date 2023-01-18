const students = [
  "강승기",
  "김이준",
  "김진휘",
  "박상진",
  "서태웅",
  "신승민",
  "오윤호",
  "윤민준",
  "이준혁",
  "홍윤기",
  "홍준기",
  "황유찬",
  "강민서",
  "김민정",
  "김서진",
  "김소은",
  "김예슬",
  "어지은",
  "원예봄",
  "이시온",
  "이준이",
  "장하린",
  "정하윤",
  "하예린",
];
const rolls = [
  "급식(밥)",
  "급식(국)",
  "급식(반찬1)",
  "급식(반찬2)",
  "급식(반찬3)",
  "검사",
  "교실 앞 쓸기",
  "교실 뒤 쓸기",
  "칠판 닦기",
  "칠판 앞 정리",
  "복도 쓸기",
  "계단 쓸기",
  "1분단 쓸기",
  "2분단 쓸기",
  "3분단 쓸기",
  "창틀(앞)",
  "창틀(뒤)",
  "신발장(앞)",
  "신발장(뒤)",
  "책장 정리",
  "쓰레기통 비우기(앞)",
  "쓰레기통 비우기(뒤)",
  "분리수거(기타)",
  "분리수거(종이)",
];

//누적
// const roll = [
//   {
//     student: "강승기",
//     roll: ["급식(밥)", "책장정리"],
//   },
// ];

const addRollForm = document.getElementById("addRoll-form");
const addRollName = document.getElementById("addRollName");
const addRollRoll = document.getElementById("addRollRoll");
const addRollBtn = document.querySelector("#addRoll-form button");

const rollList = document.getElementById("rollList");

const ROLL_KEY = "studentRoll";

let newRoll = [];

function pickRoll() {
  for (let i = 0; i < students.length; i++) {
    newRoll.push({
      student: students[i],
      roll: rolls[i],
    });
  }
  saveRoll(newRoll);
}

pickRoll();

const savedRoll = localStorage.getItem(ROLL_KEY);
if (savedRoll !== null) {
  const parsedRoll = JSON.parse(savedRoll);
  newRoll = parsedRoll;
  parsedRoll.forEach(paintRoll);
}
function saveRoll(newRoll) {
  localStorage.setItem(ROLL_KEY, JSON.stringify(newRoll));
}

function deleteRoll(event) {
  const li = event.target;
  li.remove();
  newRoll = newRoll.filter((roll) => roll.student !== roll.student);
  saveRoll();
}

function paintRoll(newRoll) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = `${newRoll.student} : ${newRoll.roll}`;
  li.appendChild(span);
  rollList.appendChild(li);
  li.addEventListener("click", deleteRoll);
}

//입력한 내용을 보내는 함수
function handleRollSubmit(event) {
  event.preventDefault();
  const newStudent = addRollName.value;
  const newRollName = addRollRoll.value;

  addRollName.value = "";
  addRollRoll.value = "";

  const newRollObj = {
    student: newStudent,
    roll: newRollName,
  };
  paintRoll(newRollObj);
  newRoll.push(newRollObj);
  saveRoll();
}

//입력 이벤트 받기
addRollForm.addEventListener("submit", handleRollSubmit);
