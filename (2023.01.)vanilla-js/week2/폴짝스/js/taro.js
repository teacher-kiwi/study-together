const HIDDEN = "hidden";
const chooseSentence = document.querySelector(".chooseSentence");
const cardArray = [['card0', "https://t1.daumcdn.net/cfile/tistory/26286D4C590089210C"], 
['card1', "https://t1.daumcdn.net/cfile/tistory/27228F4A5882FEBB2A"],
['card2', "https://blog.kakaocdn.net/dn/btddNj/btrdDJ6Kdwd/ZQNyArxTVIpqZKxx6oPKXk/img.jpg"], 
['card3', "https://blog.kakaocdn.net/dn/bQzdtI/btrdK7flZ4r/iiCvXHGFGWJhFAyR3BzAeK/img.jpg"], 
['card4', "https://blog.kakaocdn.net/dn/cn9Ivc/btrepvmngEm/OUOB6Xpfx4LmDB26TiVH5K/img.jpg"], 
['card5', "https://t1.daumcdn.net/cfile/tistory/99174F375ACA145F19"]];

const fortuneTeller = [
  "자신만만하게 목표를 잡고 출발하는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "순수하고 무욕의 삶을 사는 자유로운 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "다재다능하고 어딜 가나 인기 있는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "비밀스럽고 지적인 매력을 가진 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "권력을 가졌지만 헌신적인 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.",
  "운명적이며 새로운 변화를 맞이하는 자, 바닐라 js 스터디를 훌륭하게 끝마칠 운명입니다.", 
]

const tellFortune = document.createElement("p");
const basciAddress = "http://l.newslab.co.kr/views/unsechingu/tarot/card_back.png"

//name.js에 가져다 사용할 함수
export function showTaro(){
  for(let i=0; i<cardArray.length; i++){
    const taroImage = document.querySelector(`.card${i}`);
    taroImage.classList.remove(HIDDEN);
  }
  chooseSentence.classList.remove(HIDDEN);
}

function changeImage(clickCard, address){
  if(clickCard.src === basciAddress){
    clickCard.src = address;
  }else{
    clickCard.src = basciAddress;
  };
}

function clickTell(clickCard, index){
  if(clickCard.src !== basciAddress){
    tellFortune.innerText = fortuneTeller[index];
    document.body.appendChild(tellFortune);
  }else{
    tellFortune.innerText = "";
    document.body.appendChild(tellFortune);
  };
}

cardArray.forEach(([card, address])=>{
  const clickCard = document.querySelector(`.${card}`);
  const index = card.slice(-1);
  //(event)를 (clickCard, address)로 바꾼다고 생각해보자
  clickCard.addEventListener("click", () =>  changeImage(clickCard, address));
  //익명함수
  //clickCard.addEventListener("click", (element) => {console.log(element)});
  clickCard.addEventListener("click", () => clickTell(clickCard, index));
})
