import data from './data.js';

const $topLeftBox = document.querySelector('.top-left');
const $topRightBox = document.querySelector('.top-right');
const $bottomLeftBox = document.querySelector('.bottom-left');
const $bottomRightBox = document.querySelector('.bottom-right');
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

$topLeftBox.addEventListener('mouseenter', handleMouseEnter);
$topRightBox.addEventListener('mouseenter', handleMouseEnter);
$bottomLeftBox.addEventListener('mouseenter', handleMouseEnter);
$bottomRightBox.addEventListener('mouseenter', handleMouseEnter);
