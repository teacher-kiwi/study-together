import { $ } from './dom.js';

const HIDDEN_CLASSNAME = 'hidden';

export function paintGreetings(username) {
  $('#greeting').innerText = `${username}님 반가워요!`;
  $('#greeting').classList.remove(HIDDEN_CLASSNAME);
  $('#logout').classList.remove(HIDDEN_CLASSNAME);
}

export function paintTodo({ todo, id }) {
  $('#todo-list').insertAdjacentHTML(
    'beforeend',
    `<li id=${id}><span>${todo}</span><button class="del-button">X</button></li>`
  );
}

export function paintTodos(todos) {
  const todosLi = todos
    .map(
      ({ todo, id }) =>
        `<li id=${id}><span>${todo}</span><button class="del-button">X</button></li>`
    )
    .join('');

  $('#todo-list').insertAdjacentHTML('beforeend', todosLi);
}
