const LS_KEY = "user";

let startDate;
let timeID;

const init = () => {
  loginForm.addEventListener("submit", login);
};

const login = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  nameInput.value = "";
  const hello = name === localStorage.getItem(LS_KEY) ? "또 오셨군요!" : "반갑습니다.";
  welcome.innerText = `${hello} ${name}님😘`;
  localStorage.setItem(LS_KEY, name);

  // Element 삭제하는 method
  loginForm.remove();

  // Element의 Attribute를 삭제하는 method
  game.removeAttribute("hidden");

  timeForm.addEventListener("submit", gameStart);
};

const gameStart = (event) => {
  event.preventDefault();

  startDate = new Date();
  const time = parseInt(event.target[0].value);
  timeID = setTimeout(gameEnd, time * 1000);
  endBtn.addEventListener("click", gameEnd);
  endBtn.removeAttribute("hidden");
  result.innerText = "";
};

const gameEnd = (arg) => {
  // Attribute 추가
  endBtn.setAttribute("hidden", "");
  // 이벤트리스너 삭제
  endBtn.removeEventListener("click", gameEnd);
  if (arg) {
    // setTimeout 삭제
    clearTimeout(timeID);
    result.innerText = (new Date() - startDate) / 1000 + "초";
  } else {
    result.innerText = "정해진 시간이 초과되었습니다!";
  }
};

init();
