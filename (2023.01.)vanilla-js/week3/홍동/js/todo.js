import { $ } from './libs/dom.js';
import { paintCompletedTodo, paintTodo } from './libs/paint.js';

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let completedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];

const $todoInput = $('#todo-form input');

function saveTodos(newTodo) {
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = $todoInput.value;
  const id = String(Date.now());
  $todoInput.value = '';
  paintTodo({ todo: newTodo, id });
  saveTodos({ todo: newTodo, id, content: '' });
}

function handleClickCompleted({ target }) {
  if (!target.matches('#todo-list .complete-btn')) return;
  const todoId = target.parentElement.id;
  const todoState = target.parentElement.parentElement.className;
  const selectedTodos = todoState === 'progress-todos' ? todos : completedTodos;

  const todo = selectedTodos.filter(({ id }) => id === todoId)[0];

  if (todoState === 'progress-todos') {
    paintCompletedTodo(todo);
  } else {
    paintTodo(todo);
  }
  target.parentElement.remove(todoId);
  toggleTodoInLocalStorage(todoState, todo);
}

function toggleTodoInLocalStorage(todoState, todo) {
  const deleteKey = todoState === 'progress-todos' ? 'todos' : 'completedTodos';
  const addKey = todoState === 'progress-todos' ? 'completedTodos' : 'todos';

  const deletedTodos = JSON.parse(localStorage.getItem(deleteKey)).filter(
    ({ id }) => id !== todo.id
  );
  localStorage.setItem(deleteKey, JSON.stringify(deletedTodos));

  const addTodos = JSON.parse(localStorage.getItem(addKey)) || [];
  localStorage.setItem(addKey, JSON.stringify([...addTodos, todo]));

  if (todoState === 'progress-todos') {
    todos = deletedTodos;
    completedTodos = [...addTodos, todo];
  } else {
    completedTodos = deletedTodos;
    todos = [...addTodos, todo];
  }
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
