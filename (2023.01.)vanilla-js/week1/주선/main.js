let title = document.title;
let body = document.body;

let bodytitle = document.querySelector('#title');
let gaeyo = document.querySelector('#gaeyo');
let history = document.querySelector('#history');
let DOM = document.querySelector('#dom');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');

btn1.addEventListener('click', () => {
  title = 'HTML';
});
btn2.addEventListener('click', () => {
  bodytitle.innerHTML = 'HTML';
});
btn3.addEventListener('click', () => {
  gaeyo.innerHTML =
    '웹사이트의 모습을 기술하기 위한 마크업 언어. 프로그래밍 언어가 아니라 마크업 정보를 표현하는 마크업 언어로 문서의 내용 이외의 문서의 구조나 서식 같은 것을 포함한다. 보면 알겠지만 애초에 이름 HTML의 ML이 마크업 언어라는 뜻이다. 웹사이트에서 흔히 볼 수 있는 htm이나 html 확장자가 바로 이 언어로 작성된 문서다.';
});
btn4.addEventListener('click', () => {
  history.innerHTML =
    '1980년, 유럽 입자 물리 연구소(CERN)의 계약자였었던 물리학자 팀 버너스리가 HTML의 원형인 인콰이어를 제안하였다. 인콰이어는 CERN의 연구원들이 문서를 이용하고 공유하기 위한 체계였다. 1989년에 팀 버너스리는 인터넷 기반 하이퍼텍스트 체계를 제안하는 메모를 작성했다.[2] 버너스 리는 1990년 말에 HTML을 명시하고, 브라우저와 서버 소프트웨어를 작성했다. 그 해에 버너스리와 CERN 데이터 시스템 엔지니어 로버트 카일리아우와 함께 CERN측에 자금 지원을 요청하였지만, 이 프로젝트는 CERN으로부터 정식으로 채택 받지 못했다. 버너스리의 개인적인 기록[3]에 1990년부터 "하이퍼텍스트가 사용되는 여러 분야의 일부"를 열거했고 백과사전을 그 목록의 첫 번째로 두었다.';
});
btn5.addEventListener('mouseenter', () => {
  DOM.innerHTML =
    'HTML은 문법 오류에 관대한 편이다.[2] [3]그래서 닫는 태그를 누락한다든가[4] 태그에 오타가 난다든가 하는 오류가 발생해도 어느 정도는 씹어먹고 작동할 수 있다. 물론 어느 정도까지만이다. div 태그 등 중요한 태그에서 오타가 난다면 사이트 레이아웃이 홀랑 깨져버리기도 한다. 위에 있는 HTML5 표준 형식 HTML이 아니더라도, 그냥 h1 Hello World!라고만 써도(DOCTYPE 선언문 누락, html 선언 태그 누락, head, body 태그 누락, 닫는 태그 /h1 누락) 어지간해서는 의도한 바대로 출력이 된다. 물론 디버그 모드로 보면 이 부분이 잘못되었다고 에러가 떠 있을 것이다. HTML 최상단의 !DOCTYPE[5] 선언이 누락될 경우에는 이야기가 많이 달라지는데, 이 경우 브라우저는 해당 HTML 문서를 호환성 모드(Quirks mode)[6]로 해석하여 렌더링한다.';
});

btn6.addEventListener('click', () => {
  body.classList.toggle('clicked');
});
