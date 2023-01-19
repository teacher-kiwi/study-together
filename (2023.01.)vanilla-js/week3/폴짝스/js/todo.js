const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const submitBtn = todoForm.querySelector("#submit-button")
const todoList = document.querySelector("#todo-list");
let todos = [];
const KEY_TODO = "todo";
const getSavedTodos = localStorage.getItem(KEY_TODO);

if(getSavedTodos){
  //locatlStrorage에 string으로 저장된 요소를 array로 바꿔오기
  const parseTodos = JSON.parse(getSavedTodos);
  todos = parseTodos;
  todos.forEach(showTodo);
}

function saveTodo(){
  localStorage.setItem(KEY_TODO, JSON.stringify(todos));
}

function showTodo(newTodoobj){
  const li = document.createElement("li");
  li.id = newTodoobj.id;
  const span = document.createElement("span");
  span.innerText = newTodoobj.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❤️";
  deleteBtn.addEventListener("click", eraseTodo);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function eraseTodo(event){
  const deleteli = event.target.parentElement;
  //먼저 localStorage에 저장된 내용을 지우자
  todos = todos.filter(value => value.id != parseInt(deleteli.id));
  saveTodo();
  deleteli.remove();
}

function todoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoobj = {
    id: Date.now(),
    text:newTodo
  }
  todoInput.value = "";
  todos.push(newTodoobj);
  saveTodo();
  showTodo(newTodoobj);
}

submitBtn.addEventListener("click", todoSubmit);