const quote = [
  "부진아는 나랏님도 구제하지 못한다.",
  "교육은 가정교육이 우선이다.",
  "콩 심은데 콩나고 팥 심은데 팥 난다",
  "학생의 잘못은 교사의 잘못이 아니라 학생의 잘못이다.",
  "VIP는 VIP인 이유가 있다.",
  "내 자식이 아니다.",
];

function randomQuote() {
  const randomNumber = Math.floor(Math.random() * quote.length);
  const quoteContent = document.querySelector(".quote.content");
  quoteContent.innerText = `${quote[randomNumber]}`;
}

randomQuote();
