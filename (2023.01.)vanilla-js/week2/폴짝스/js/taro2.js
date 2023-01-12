const HIDDEN = "hidden";
const chooseSentence = document.querySelector(".chooseSentence");
const addressArray = ["https://t1.daumcdn.net/cfile/tistory/26286D4C590089210C", 
"https://t1.daumcdn.net/cfile/tistory/27228F4A5882FEBB2A",
"https://blog.kakaocdn.net/dn/btddNj/btrdDJ6Kdwd/ZQNyArxTVIpqZKxx6oPKXk/img.jpg", 
"https://blog.kakaocdn.net/dn/bQzdtI/btrdK7flZ4r/iiCvXHGFGWJhFAyR3BzAeK/img.jpg",
"https://blog.kakaocdn.net/dn/cn9Ivc/btrepvmngEm/OUOB6Xpfx4LmDB26TiVH5K/img.jpg", 
"https://t1.daumcdn.net/cfile/tistory/99174F375ACA145F19"];

const fortuneTeller = [
  "자신만만하게 목표를 잡고 출발하는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "순수하고 무욕의 삶을 사는 자유로운 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "다재다능하고 어딜 가나 인기 있는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "비밀스럽고 지적인 매력을 가진 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "권력을 가졌지만 헌신적인 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "운명적이며 새로운 변화를 맞이하는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.", 
]

const tellFortune = document.createElement("p");
const basciAddress = "https://st.depositphotos.com/1363007/1810/i/600/depositphotos_18108561-stock-photo-card-back.jpg";

//addressArray의 dindex 섞기
export function shuffleIndex(){
  const arr = [];
  for(let i=0;i<addressArray.length;i++){
    arr.push(i);
  }
  arr.sort(()=>Math.random()-0.5);
  console.log(arr);

  
  arr.forEach(element => {
    const clickCard = document.querySelector(`.card${element}`);
    //(event)를 (clickCard, i)로 바꾼다고 생각해보자
    clickCard.addEventListener("click", () => changeImage(clickCard, element, arr));
    //익명함수
    //clickCard.addEventListener("click", (element) => {console.log(element)});
    clickCard.addEventListener("click", () => clickTell(clickCard, element, arr));
  })  
}

//name.js에 가져다 사용할 함수. 타로 카드의 뒷장 이미지와 '타로 카드를 고르세요' 문장 보이기
export function showTaro(){
  for(let i=0; i<addressArray.length; i++){
    const taroImage = document.querySelector(`.card${i}`);
    taroImage.classList.remove(HIDDEN);
  }
  chooseSentence.classList.remove(HIDDEN);
}

function changeImage(clickCard, element, arr){
  console.log(element);
  if(clickCard.src === basciAddress){
    clickCard.src = addressArray[arr.indexOf(element)];
  }else{
    clickCard.src = basciAddress;
  };
}

function clickTell(clickCard, element, arr){
  if(clickCard.src !== basciAddress){
    tellFortune.innerText = fortuneTeller[arr.indexOf(element)];
  }else{
    tellFortune.innerText = "";
  }
  document.body.appendChild(tellFortune);
}



