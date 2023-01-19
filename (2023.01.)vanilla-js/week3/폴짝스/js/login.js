const logInForm = document.querySelector("#login-Form");
const logInInput = logInForm.querySelector("#login-input");
const logInBtn = logInForm.querySelector("#login-button");
const NAME = "username";
const HIDDEN = "hidden";
const savedName = localStorage.getItem(NAME);
const outBtn = document.querySelector("#logout");


if(savedName === null){
  logInBtn.classList.add("cursor");
  logInBtn.addEventListener("click", saveName);
}else{
  logInForm.classList.add(HIDDEN);
  showGreeting(savedName);
}

function showGreeting(name){
  submitBtn.classList.add("cursor");
  const placeholder = `안녕하세요, ${name}님. 오늘의 할 일을 적으세요.`;
  todoInput.placeholder = placeholder;
  todoForm.classList.remove(HIDDEN);
  outBtn.classList.add("cursor");
}

function saveName(event){
  event.preventDefault();
  const username = logInInput.value;
  localStorage.setItem(NAME, username);
  logInForm.classList.add(HIDDEN);
  showGreeting(username);
}

// logInBtn.addEventListener("click", saveName);

