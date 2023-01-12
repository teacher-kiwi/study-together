const userAnswerForm = document.querySelector('#useranswer');
const userAnswerInput = userAnswerForm.querySelector('input');
const userAnswerList = document.querySelector('#answerlist');
let userArray = [];
ball = 0; // let으로 정의하면 작동 안됨.. 왜지? let은 재정의 가능한 변수 아닌가?
strike = 0;
out = 0;

function compareAnswer(e) {
  e.preventDefault();
  makeArray();
  userArray.forEach((number, index) => {
    if (number == answerArray[index]) {
      strike++;
    } else if (answerArray.includes(number)) {
      ball++;
    } else {
      out++;
    }
  });
  printAnswer();
  resetAnswer();
  if (strike === 3) {
    endGame();
  }
  strike = 0;
  ball = 0;
  out = 0;
}

function makeArray() {
  userAnswerString = userAnswerInput.value;
  if (userAnswerString.length === 3) {
    for (i = 0; i < 3; i++) {
      userArray.push(parseInt(userAnswerString[i]));
    }
  } else {
    alert('3자리 숫자만 입력해주세요.');
  }
}

function printAnswer() {
  const liNode = document.createElement('li');
  liNode.innerText = `당신의 정답 : ${userAnswerString} =========> ${strike} Strike ${ball} Ball ${out} Out`;
  userAnswerList.appendChild(liNode);
}

function resetAnswer() {
  userArray = [];
  userAnswerInput.value = '';
}

function endGame() {
  gameForm.querySelector('h3 span:last-child').innerText =
    userAnswerString + '  축하합니다.';
  alert('정답입니다. 축하합니다~~^^');
  location.reload();
}

userAnswerForm.addEventListener('submit', compareAnswer);
