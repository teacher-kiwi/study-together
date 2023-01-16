import { $ } from './libs/dom.js';

const $todoInput = $('#todo-form input');

function paintTodo(todo) {
  $('#todo-list').insertAdjacentHTML(
    'beforeend',
    `<li><span>${todo}</span><button class="del-button">X</button></li>`
  );
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
  paintTodo(newTodo);
}

function handleClickDelete({ target }) {
  if (!target.matches('#todo-list li .del-button')) return;

  target.parentElement.remove();
}

$('#todo-form').addEventListener('submit', handleSubmitTodo);
$('#todo-list').addEventListener('click', handleClickDelete);
