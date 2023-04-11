document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    toDo = e.target['new-task-description'].value;
    buildToDo(toDo);
    form.reset();
  })
});

function buildToDo(toDo){
  let list = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = "x";
  list.textContent = `${toDo} `;
  list.appendChild(btn);

  let taskList = document.querySelector('#tasks');
  taskList.appendChild(list);

}

function handleDelete(event){
  event.target.parentNode.remove();
}