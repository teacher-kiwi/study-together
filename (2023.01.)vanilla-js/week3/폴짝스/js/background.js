const newbody = document.querySelector("body");

function changeBackGround(IMGKey){
  const img = new Image(); //document.createElement("img"); 와 같은 기능
  img.src = IMGKey;
  img.classList.add("bgimg");
  newbody.appendChild(img);
}
