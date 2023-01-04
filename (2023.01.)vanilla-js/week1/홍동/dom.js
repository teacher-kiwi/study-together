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
