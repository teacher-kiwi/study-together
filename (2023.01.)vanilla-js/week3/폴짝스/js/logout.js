const logoutBtn = document.querySelector("#logout");


function logout(){
  localStorage.removeItem(NAME);
  logInInput.value="";
  logInInput.placeholder = "로그인할 이름을 적으세요.";
  logInForm.classList.remove(HIDDEN);
  localStorage.removeItem(KEY_TODO);
  todoForm.classList.add(HIDDEN);
  while(todoList.hasChildNodes()){
    todoList.removeChild(todoList.firstChild);
  }
}

logoutBtn.addEventListener("click", logout);