// 1. add todo
// 1) 시계, 명언 사이에 span, button 생성
// 2) local 스토리지에 저장
// 3) todo 리스트 만들어서 로컬 스토리지에 저장된 내용 다시 불러오기
const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todo-list");
let todoSaveList = [];

function addTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoSaveList.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  span.classList.add("fade-in");
  checkbox.classList.add("fade-in");
  li.appendChild(checkbox);
  li.appendChild(span);
  checkbox.addEventListener("click", deleteTodo);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem("todoSaveList", JSON.stringify(todoSaveList));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todoSaveList = todoSaveList.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveTodo();
}

todoForm.addEventListener("submit", addTodo);

const savedTodoList = localStorage.getItem("todoSaveList");

if (savedTodoList !== null) {
  const parsedTodo = JSON.parse(savedTodoList);
  parsedTodo.forEach(paintTodo);
}
