import { $ } from './libs/dom.js';

const $todoInput = $('#todo-form input');

function paintTodo(todo) {
  $('#todo-list').insertAdjacentHTML(
    'beforeend',
    `<li><span>${todo}</span></li>`
  );
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
  paintTodo(newTodo);
}

$('#todo-form').addEventListener('submit', handleSubmitTodo);
