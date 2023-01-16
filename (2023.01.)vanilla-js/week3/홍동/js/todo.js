import { $ } from './libs/dom.js';
import { paintTodo } from './libs/paint.js';

const $todoInput = $('#todo-form input');

function saveTodos(newTodo) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  $todoInput.value = '';
  paintTodo(newTodo);
  saveTodos(newTodo);
}

function handleClickDelete({ target }) {
  if (!target.matches('#todo-list li .del-button')) return;

  target.parentElement.remove();
}

function handleLoadWindow() {}

window.addEventListener('load', handleLoadWindow);
$('#todo-form').addEventListener('submit', handleSubmitTodo);
$('#todo-list').addEventListener('click', handleClickDelete);
