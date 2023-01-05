// Write JavaScript here 
const correct = document.querySelector(".correct");
let times = 0;

function writeName1(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  if(buttonTitle == '아기공룡둘리'){
    correct.innerText = parseInt(correct.innerText)+1;
  };
}

function writeName2(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  if(buttonTitle == '피구왕통키'){
    correct.innerText = parseInt(correct.innerText)+1;
  };
}

function writeName3(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  if(buttonTitle == '영심이'){
    correct.innerText = parseInt(correct.innerText)+1;
  };
}

function addTimes(){
  times += 1;
  if(times>=3){
    if(parseInt(correct.innerText) >= 3){
      alert("만화 좀 보셨군요!");
    }else if(parseInt(correct.innerText)==2){
      alert("만화 중수입니다!");
    }else if(parseInt(correct.innerText)<=1){
      alert("하나도 안 본 당신...혹시 2000년대생?");
    };
  };
}

button1.addEventListener('click', writeName1);
button1.addEventListener('click', addTimes);
button2.addEventListener('click', writeName2);
button2.addEventListener('click', addTimes);
button3.addEventListener('click', writeName3);
button3.addEventListener('click', addTimes);