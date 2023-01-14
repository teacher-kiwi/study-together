import { $ } from './libs/dom.js';

const $todoInput = $('#todo-form input');

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
}

$('#todo-form').addEventListener('submit', handleSubmitTodo);
