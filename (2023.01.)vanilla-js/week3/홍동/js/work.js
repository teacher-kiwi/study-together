import { $ } from './libs/dom.js';

function handleClickWorkList({ target }) {
  if (!target.matches('#work-list div')) return;
  const {
    dataset: { work },
  } = target;

  removeBeforeWork();
  saveWorkSpace(work);

  $(`#${work}`).classList.remove('hidden');
  $('.work-space-exit').classList.remove('hidden');
}

function saveWorkSpace(work) {
  localStorage.setItem('work', work);
}

function removeBeforeWork() {
  const work = localStorage.getItem('work');
  if (!work) return;
  $(`#${work}`).classList.add('hidden');
}

function handleClickExitBtn() {
  removeBeforeWork();
  $('.work-space-exit').classList.add('hidden');
  localStorage.removeItem('work');
}

$('#work-list').addEventListener('click', handleClickWorkList);
$('.work-space-exit').addEventListener('click', handleClickExitBtn);
