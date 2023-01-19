import convertDate from './convertDate.js';
import { $ } from './dom.js';
import weathers from './weathers.js';

const HIDDEN_CLASSNAME = 'hidden';

export function paintGreetings(username) {
  $('#greeting').innerText = `${username}님 반가워요!`;

  $('#greeting').classList.remove(HIDDEN_CLASSNAME);
  $('#logout').classList.remove(HIDDEN_CLASSNAME);
  $('.work-space').classList.remove(HIDDEN_CLASSNAME);
}

export function paintTodo({ todo, id }) {
  $('#todo-list .progress-todos').insertAdjacentHTML(
    'beforeend',
    `<li id=${id}><i class="fa-regular fa-square complete-btn"></i><span class="todo-item">${todo}</span><span>${convertDate(
      Number(id)
    )}<span></li>`
  );
}

export function paintCompletedTodo({ todo, id }) {
  $('#todo-list .complete-todos').insertAdjacentHTML(
    'beforeend',
    `<li id=${id}><i class="fa-solid fa-square-check complete-btn"></i><span class="todo-item">${todo}</span><span>${convertDate(
      Number(id)
    )}<span></li>`
  );
}

export function paintTodos(todos) {
  const todosLi = todos
    .map(
      ({ todo, id }) =>
        `<li id=${id}><i class="fa-regular fa-square complete-btn"></i><span class="todo-item">${todo}</span><span>${convertDate(
          Number(id)
        )}<span></li>`
    )
    .join('');

  $('#todo-list .progress-todos').insertAdjacentHTML('beforeend', todosLi);
}

export function paintCompletedTodos(completedTodos) {
  const todosLi = completedTodos
    .map(
      ({ todo, id }) =>
        `<li id=${id}><i class="fa-solid fa-square-check complete-btn"></i><span class="todo-item">${todo}</span><span>${convertDate(
          Number(id)
        )}<span></li>`
    )
    .join('');

  $('#todo-list .complete-todos').insertAdjacentHTML('beforeend', todosLi);
}

export function paintWeather(weather) {
  const { weatherKR, icon } = weathers.filter(
    ({ weatherName }) => weatherName === weather
  )[0];
  $('#weather').insertAdjacentHTML(
    'beforeend',
    `${icon}<span>${weatherKR}</span>`
  );
}
