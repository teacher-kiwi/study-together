// #3.0 The Document Object
document.title = 'Hello! JS!';

// #3.1 HTML in Javascript
const title = document.getElementById('title');
title.innerText += ' Good Luck!';

// #3.2 Searching For Elements
const contents = document.getElementsByClassName('contents');
console.dir(contents);

const hello = document.querySelectorAll('div h3:first-child');
hello.forEach((item) => (item.innerText += ' Oh my god!'));

// #3.3~5 Event
function handleTitleClick() {
  console.log('title was clicked');
}

function handleTitleMouseEnter() {
  title.style.color = 'red';
}

function handleTitleMouseLeave() {
  title.style.color = 'black';
}

function handleWindowReszie() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('복사가 감지 되었습니다!');
}

function handleWindowOffline() {
  alert('no wifi');
}

function handleWindowOnline() {
  alert('wifi');
}

// 이벤트 등록은 아래와 같이 할 수 있다.
// title.onclick = handleTitleClick

// removeEventListener 사용 가능하기 때문에 아래의 방법을 더 선호
title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleTitleMouseEnter);
title.addEventListener('mouseleave', handleTitleMouseLeave);

window.addEventListener('resize', handleWindowReszie);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
