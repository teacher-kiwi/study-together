const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//업데이트를 가능하게 하기 위해 let으로 변경
let toDos = [];

//로컬스토리지에 할일 목록을 저장하는데 텍스트로 변환
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//할일 목록에 있는 내용을 지우는데 리스트와 로컬에는 그대로 남는 문제 여전히.
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//할일 목록을 보여주는 함수
function paintToDo(newTodo) {
  //리스트 생성
  const li = document.createElement("li");
  li.id = newTodo.id;
  //내용 보이게
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  //버튼
  const button2 = document.createElement("button2");
  button2.innerText = "V";

  li.appendChild(span);
  li.appendChild(button2);
  toDoList.appendChild(li);

  button2.addEventListener("click", deleteToDo);
}

//입력한 내용을 보내는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

//입력 이벤트 받기
toDoForm.addEventListener("submit", handleToDoSubmit);

//저장된 할일 목록 있는지 확인
const savedToDos = localStorage.getItem(TODOS_KEY);

//만약 있으면 빈 array에 넣기 forEach 써서 각각
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
