const trackPointer = document.querySelector('#trackpointer');

function trackPoint(e) {
  trackPointer.style.top = e.y + 'px';
  trackPointer.style.left = e.x + 'px';
}

if (savedUsername != null) {
  trackPointer.innerText = `Hello, ${savedUsername} :) `;
}

window.addEventListener('mousemove', trackPoint);
