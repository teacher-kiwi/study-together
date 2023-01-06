const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("too long!!");
    }
}

loginButton.addEventListener("click",onLoginBtnClick);