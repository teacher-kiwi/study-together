import data from './data.js';

const $boxs = document.querySelectorAll('.box');
const $video = document.querySelector('.video');

function handleMouseEnter(event) {
  const {
    target: {
      dataset: { music },
    },
  } = event;
  const { vedio } = data;

  $video.innerHTML = vedio[music];
}

$boxs.forEach((box) => {
  box.addEventListener('mouseenter', handleMouseEnter);
});
