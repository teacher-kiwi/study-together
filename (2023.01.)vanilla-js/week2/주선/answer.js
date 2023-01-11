const answerArray = [];

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function makeAnswer() {
  for (i = 0; i < 3; i++) {
    answerArray.push(randomNumber());
  }
}
makeAnswer();
