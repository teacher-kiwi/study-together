const cursor = document.querySelector("#cursor");
const wrap = document.querySelector("#wrap");

function mouserPointer(e) {
    cursor.style.top = e.clientY + "px" 
    cursor.style.left = e.clientX + "px"
}

document.addEventListener("mousemove", mouserPointer);
