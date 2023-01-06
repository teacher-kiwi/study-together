const gradientColor = [
  { "#ff9a9e 0%": "#fad0c4 100%" },
  { "#a18cd1 0%": "#fbc2eb 100%" },
  { "#fad0c4 0%": "#ffd1ff 100%" },
  { "#ffecd2 0%": "#fcb69f 100%" },
  { "#f6d365 0%": "fda085 100%" },
];

function backgroundColorChanger() {
  const randomColorPicker = Math.floor(Math.random() * gradientColor.length);
  const startColor = Object.keys(gradientColor[randomColorPicker]);
  const endColor = gradientColor[randomColorPicker][startColor];
  const changeColor = document.querySelector("body");
  changeColor.style.background = `linear-gradient(45deg, ${startColor}, ${endColor})`;
}

backgroundColorChanger();
