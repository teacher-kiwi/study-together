const $topLeftBox = document.querySelector('.top-left');
const $topRightBox = document.querySelector('.top-right');
const $bottomLeftBox = document.querySelector('.bottom-left');
const $bottomRightBox = document.querySelector('.bottom-right');
const $video = document.querySelector('.video');

function handleMouseEnter(event) {
  console.log(event);
  //   $video.innerHTML = `<iframe
  //         width="1120"
  //         height="630"
  //         src="https://www.youtube.com/embed/p_XdZdg9oGc/?"
  //         title="YouTube video player"
  //         frameborder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //         allowfullscreen
  //       ></iframe>`;
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
