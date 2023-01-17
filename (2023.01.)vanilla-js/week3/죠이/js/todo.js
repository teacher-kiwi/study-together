const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
  event.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
