import data from './data.js';
import $ from './dom.js';

function handleMouseEnter(event) {
  const {
    target: {
      dataset: { music },
    },
  } = event;
  const { vedio } = data;

  $('video').innerHTML = vedio[music];
}

$('top-left').addEventListener('mouseenter', handleMouseEnter);
$('top-right').addEventListener('mouseenter', handleMouseEnter);
$('bottom-left').addEventListener('mouseenter', handleMouseEnter);
$('bottom-right').addEventListener('mouseenter', handleMouseEnter);
