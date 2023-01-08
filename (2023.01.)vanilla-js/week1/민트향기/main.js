const cursor = document.querySelector("#cursor");
const wrap = document.querySelector("#wrap");
const btn = document.querySelector("#btn");
const h1 = document.querySelector("#text");

//마우스 포인터 기능(기무1님 참조)
function mouserPointer(e) {
    cursor.style.top = e.clientY + "px" ;
    cursor.style.left = e.clientX + "px";
}
document.addEventListener("mousemove", mouserPointer);

//배경색 바꾸기 기능
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  // 역따옴표와 ${변수}를 활용한 문자열 포맷팅
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

//mouse 이벤트 기능
function handleMouseenter() {
  h1.innerText="mouse is here";
}
function handleMouseleave() {
  h1.innerText="내용 바꾸기 연습";
}
document.addEventListener("mouseenter", handleMouseenter);
document.addEventListener("mouseleave", handleMouseleave);