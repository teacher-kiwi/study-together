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
  const id = Date.now();
  $todoInput.value = '';
  paintTodo({ todo: newTodo, id });
  saveTodos({ todo: newTodo, id });
}

function handleClickDelete({ target }) {
  if (!target.matches('#todo-list li .del-button')) return;

  target.parentElement.remove();
}

$('#todo-form').addEventListener('submit', handleSubmitTodo);
$('#todo-list').addEventListener('click', handleClickDelete);
