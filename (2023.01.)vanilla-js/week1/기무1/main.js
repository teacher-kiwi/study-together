const titleChangeBtn = document.querySelector("#titleChangeBtn");
const titleSpan = document.querySelector("#titleSpan");
const mouseText = document.querySelector("#mouseText");
const windowX = document.querySelector("#windowX");
const windowY = document.querySelector("#windowY");
const pasteInput = document.querySelector("#pasteInput");
const colorPicker = document.querySelector("#colorPicker");

function writeTitle() {
  titleSpan.innerText = document.title;
}

function writeMouseText(text) {
  mouseText.querySelector("span").innerText = text;
}

function writeXY() {
  windowX.innerText = window.outerWidth;
  windowY.innerText = window.outerHeight;
}

function changeTitle() {
  const newTitle = prompt("새로운 타이틀을 입력해!");
  document.title = newTitle;
  writeTitle();
  writeMouseText("타이틀을 바꿨구나?");
}

function changeColor() {
  document.documentElement.style.backgroundColor = colorPicker.value;
  writeMouseText("배경색은 마음에 드니?");
}

function trackPointer(e) {
  mouseText.style.left = e.x + "px";
  mouseText.style.top = e.y + "px";
}

function handleResize() {
  writeMouseText("창 크기를 바꿨지?");
  writeXY();
}

function handleCopy() {
  writeMouseText("복사했군!");
  pasteInput.hidden = false;
}

function handlePaste() {
  writeMouseText("붙여넣기 했지?");
  setTimeout(() => {
    pasteInput.value = "잘했어!";
  }, 100);
}

titleChangeBtn.addEventListener("click", changeTitle);
colorPicker.addEventListener("change", changeColor);
window.addEventListener("mousemove", trackPointer);
window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("paste", handlePaste);

function init() {
  writeTitle();
  writeXY();
}

init();
