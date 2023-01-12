// Write JavaScript here 
const correct = document.querySelector(".correct");
let number = parseInt(correct.innerText);
let times = 0;

function writeName1(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  button1.classList.add('toPink');
  if(buttonTitle == '아기공룡둘리'){
    number+=1
    correct.innerText = number;
  };
  addTimes();
}

function writeName2(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  button2.classList.add('toPink');
  if(buttonTitle == '피구왕통키'){
    number+=1
    correct.innerText = number;
  };
  addTimes();
}

function writeName3(){
  const buttonTitle = prompt('만화의 제목을 쓰시오(띄어쓰기 없이)');
  button3.classList.add('toPink');
  if(buttonTitle == '영심이'){
    number+=1
    correct.innerText = number;
  };
  addTimes();
}

function addTimes(){
  times += 1;
  if(times>=3){
    if(number >= 3){
      alert("만화 좀 보셨군요!");
    }else if(number ==2){
      alert("만화 중수입니다!");
    }else if(number<=1){
      alert("옛날 만화를 모르는 당신...혹시 2000년대생?");
    };
  };
}

button1.addEventListener('click', writeName1);

button2.addEventListener('click', writeName2);

button3.addEventListener('click', writeName3);
