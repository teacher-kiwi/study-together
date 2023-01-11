class App {
  start() {
    this.eventHander();
  }

  init() {
    const theme = localStorage.getItem('theme');
    if (!theme) return;

    document.querySelector('body').className = theme;
  }

  eventHander() {
    window.addEventListener('load', this.init);
  }
}

const app = new App();
app.start();
