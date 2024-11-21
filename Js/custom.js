function sendTask(){
  let task = document.getElementById("taskInput").value;
  const para = document.createElement("p");
  const text = document.createTextNode(task);
  para.appendChild(text);

  let parent = document.getElementById("tasks");
  parent.appendChild(para);

  document.getElementById("taskInput").value = " ";
} 
document.getElementById("addTask").onclick = sendTask;



function removeTask(){
  let taskParent = document.getElementById("tasks")
  let task = document.getElementById("tasks").lastElementChild;
  taskParent.removeChild(task);
}
document.getElementById("removeTask").onclick = removeTask;

