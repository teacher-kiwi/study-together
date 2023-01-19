const clockCanvas = document.querySelector("#canvas");
//2차원 렌더링 컨텍스트 객체 생성
const ctx = clockCanvas.getContext("2d");
//canvas 높이를 이용해서 반지름 구하기. 이걸로 시계 모양 만들 것임
let radius = clockCanvas.height/2;

//(도면 객체의) (0,0) 위치를 캔버스 중앙으로 다시 매핑
ctx.translate(radius, radius);
//시계가 canvas 밖으로 삐져나가지 않게 radius 살짝 줄이기
radius = radius*0.9;
//drawClock(radius);
setInterval(drawClock, 1000);

function drawHand(ctx, pos, length, width){
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawTime(ctx, radius){
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour%12;
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.03);
  //minute
  minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.03);
  // second
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawNumbers(ctx, radius){
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawFace(ctx, radius){
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');

  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawClock(){
  ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}


