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

function handleMouseLeave() {
  $video.innerHTML = ``;
}

$topLeftBox.addEventListener('mouseenter', handleMouseEnter);
$topLeftBox.addEventListener('mouseleave', handleMouseLeave);
$topRightBox.addEventListener('mouseenter', handleMouseEnter);
$topRightBox.addEventListener('mouseleave', handleMouseEnter);
$bottomLeftBox.addEventListener('mouseenter', handleMouseEnter);
$bottomLeftBox.addEventListener('mouseleave', handleMouseEnter);
$bottomRightBox.addEventListener('mouseenter', handleMouseEnter);
$bottomRightBox.addEventListener('mouseleave', handleMouseEnter);
