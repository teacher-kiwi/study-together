const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let todos = [];
const savedToDos = localStorage.getItem('todos');

function todoSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  const todoObject = { text: todo, id: Date.now() };
  todoInput.value = '';
  todos.push(todoObject);
  paintTodo(todoObject); // 화면에 표시
  localStorage.setItem('todos', JSON.stringify(todos)); //로컬 저장소에 저장
}

function paintTodo(potato) {
  const li = document.createElement('li');
  li.id = potato.id;
  const span = document.createElement('span');
  span.innerText = potato.text;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleteTodo); // 왜 여기에 두는지?
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter((item) => item.id != li.id);
  li.remove();
  localStorage.setItem('todos', JSON.stringify(todos)); // 왜 구현될까요? JSON 변환 안했는데..
}

todoForm.addEventListener('submit', todoSubmit);

if (savedToDos != '') {
  todos = JSON.parse(savedToDos);
  todos.forEach(paintTodo);
}
