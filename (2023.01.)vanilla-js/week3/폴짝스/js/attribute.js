const hello = document.querySelector("#hello h1");
const atrBrn = document.querySelector("#hello button");

function deleteAttribute(){
  hello.removeAttribute("id");
}

atrBrn.addEventListener("click", deleteAttribute)