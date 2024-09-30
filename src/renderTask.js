import deleteTask from "./deleteTasks.js";
import updateTodos from "./updateTodos.js";

export default function renderTask(task) {
  const taskList = document.getElementById("tasklist");
  const div = document.createElement("div");
  div.style.padding = "10px";
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  const div1 = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "checkbox";
  label.textContent = `${task.task}`;
  label.style.padding = "4px";
  div1.appendChild(input);

  div1.appendChild(label);

  const deleteMark = document.createElement("span");
  deleteMark.textContent = "✖";
  deleteMark.style.cursor = "pointer";
  deleteMark.style.color = "red";

  div.appendChild(div1);
  div.appendChild(deleteMark);
  taskList.appendChild(div);
  if(task.completed){
    input.checked=true;
    label.style.textDecoration = "line-through";


  }
  else{
    label.style.textDecoration = "none";
  }

  input.addEventListener("change",handleInputChange);

  function handleInputChange(event){
    if (input.checked) {
      
      label.style.textDecoration = "line-through";
      updateTodos(true,task._id);
    } else {
      label.style.textDecoration = "none";
      updateTodos(false,task._id);
    }
  };
  deleteMark.addEventListener("click", function (event) {
    deleteTask(task._id);
    div.removeChild(div1);
    div.removeChild(deleteMark);
  })


}
