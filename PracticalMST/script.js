function addTask(){

let taskName = document.getElementById("taskName").value.trim();
let priority = document.getElementById("priority").value;
let taskList = document.getElementById("taskList");

if(taskName === ""){
alert("Enter task");
return;
}

let li = document.createElement("li");

li.innerHTML = taskName + " - " + priority +
" <button onclick='completeTask(this)'>Complete</button>" +
" <button onclick='deleteTask(this)'>Delete</button>";

taskList.appendChild(li);

document.getElementById("taskName").value = "";
}


function completeTask(btn){

let li = btn.parentElement;

if(li.style.textDecoration === "line-through"){
li.style.textDecoration = "none";
}
else{
li.style.textDecoration = "line-through";
}

}


function deleteTask(btn){

btn.parentElement.remove();

}


function filterTasks(type){

let tasks = document.querySelectorAll("#taskList li");

for(let i = 0; i < tasks.length; i++){

if(type === "all"){
tasks[i].style.display = "block";
}

else if(type === "completed"){

if(tasks[i].style.textDecoration === "line-through")
tasks[i].style.display = "block";
else
tasks[i].style.display = "none";

}

else if(type === "pending"){

if(tasks[i].style.textDecoration !== "line-through")
tasks[i].style.display = "block";
else
tasks[i].style.display = "none";

}

}

}