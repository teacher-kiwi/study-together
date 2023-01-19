import { $ } from './libs/dom.js';
import { paintCompletedTodo, paintTodo } from './libs/paint.js';

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

function handleClickCompleted({ target }) {
  if (!target.matches('#todo-list .complete-btn')) return;
  const todoId = target.parentElement.id;
  const todo = target.parentElement.innerText;

  const todoState = target.parentElement.parentElement.className;

  if (todoState === 'progress-todos') {
    paintCompletedTodo({ todo, id: todoId });
  } else {
    paintTodo({ todo, id: todoId });
  }
  target.parentElement.remove(todoId);
  toggleTodoInLocalStorage(todoState, { todo, todoId });
}

function toggleTodoInLocalStorage(todoState, { todo, todoId }) {
  const deleteKey = todoState === 'progress-todos' ? 'todos' : 'completedTodos';
  const addKey = todoState === 'progress-todos' ? 'completedTodos' : 'todos';

  console.log(JSON.parse(localStorage.getItem(deleteKey)));
  const todos = JSON.parse(localStorage.getItem(deleteKey)).filter(
    ({ id }) => id !== Number(todoId)
  );
  localStorage.setItem(deleteKey, JSON.stringify(todos));

  const opsTodos = JSON.parse(localStorage.getItem(addKey)) || [];
  localStorage.setItem(
    addKey,
    JSON.stringify([...opsTodos, { todo, id: Number(todoId) }])
  );
}

// function handleClickDelete({ target }) {
//   if (!target.matches('#todo-list li .del-button')) return;

//   const todoId = target.parentElement.id;
//   target.parentElement.remove(todoId);
//   deleteTodoInLocalStorage(todoId);
// }

// function deleteTodoInLocalStorage(todoId) {
//   const todos = JSON.parse(localStorage.getItem('todos')).filter(
//     ({ id }) => id !== Number(todoId)
//   );
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

$('#todo-form').addEventListener('submit', handleSubmitTodo);
$('#todo-list').addEventListener('click', handleClickCompleted);
// $('#todo-list').addEventListener('click', handleClickDelete);
