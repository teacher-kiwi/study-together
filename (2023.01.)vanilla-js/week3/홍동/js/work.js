import { $ } from './libs/dom.js';

function handleClickWorkList({ target }) {
  if (!target.matches('#work-list div')) return;
  const {
    dataset: { work },
  } = target;

  removeBeforeWork();
  saveWorkSpace(work);

  $(`#${work}`).classList.remove('work-off');
}

function saveWorkSpace(work) {
  localStorage.setItem('work', work);
}

function removeBeforeWork() {
  const work = localStorage.getItem('work');
  if (!work) return;
  $(`#${work}`).classList.add('work-off');
}

$('#work-list').addEventListener('click', handleClickWorkList);
