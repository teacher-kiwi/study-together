const trackPointer = document.querySelector('#trackpointer');

function trackPoint(e) {
  trackPointer.style.top = e.y + 'px';
  trackPointer.style.left = e.x + 'px';
}

if (currentUsername != null) {
  trackPointer.innerText = `Hello, ${currentUsername} :) `;
}

window.addEventListener('mousemove', trackPoint);
