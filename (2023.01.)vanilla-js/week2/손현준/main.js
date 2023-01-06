const h4 = document.querySelector(".SHJ-component__title");
const h5 = document.querySelector("div.SHJ-component__text:second-child h5")

function handleTitleMouseEnter() {
    h4.innerText = "환영합니다.";
}

function handleMouseLeave() {
    h4.innerText = "SHJCompany";
}

h4.addEventListener("mouseenter", handleTitleMouseEnter);
h4.addEventListener("mouseleave", handleMouseLeave);

function handleTitleClick() {
    if(h5.className = "SHJ-component__title2"){
        h5.className = "";
    } else {
        h5.className = "SHJ-component__title2"
    };
}

h5.addEventListener("click", handleTitleClick);
