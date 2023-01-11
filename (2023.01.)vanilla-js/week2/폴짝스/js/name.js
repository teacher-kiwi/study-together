//form 전체
const nameForm = document.querySelector(".nameForm");
//form의 input(이름을 입력할)
const nameFormInput = document.querySelector(".nameForm input")
//h1
const sayWelcome = document.querySelector(".sayWelcome");
//storage에 저장된 username
const savedName = localStorage.getItem("username");
//class명에 추가할 hidden
const HIDDEN = "hidden";

//username이 저장되어 있지 않을 때와 저장되어 있을 때 나눠서 
if(savedName===null){
  nameForm.classList.remove(HIDDEN);
  nameForm.addEventListener("submit", nameSubmit);
}else{
  showWelcome(savedName);
}
//유저네임을 submit에 입력한 후 localstorage에 저장하는 함수
function nameSubmit(event){
  event.preventDefault();
  const name = nameFormInput.value;
  localStorage.setItem("username", name);
  nameForm.classList.add(HIDDEN);
  showWelcome(name);
}

function showWelcome(event){
  sayWelcome.innerText = `Welcome to FortuneTeller, ${event}`;
  sayWelcome.classList.remove(HIDDEN);
}

