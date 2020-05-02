const addTask = document.getElementById("add-task-button");
const clearDone = document.getElementById("clear-finished-tasks");

const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

const newTaskInput = document.getElementById("new-task-input");
const clearInput = document.getElementById("clear-input");

// add new list element
addTask.addEventListener("click", () => {
  let newTask = newTaskInput.value;
  if (!newTask) return;
  newTaskInput.value = "";

  let task = document.createElement("li");
  task.innerHTML = newTask;

  // add new task to top of the list
  if (pendingTasks.childElementCount == 0) {
    pendingTasks.appendChild(task);
  } else {
    pendingTasks.insertBefore(task, pendingTasks.firstChild);
  }

  // toggle task status onclick
  // as each task is tracked, auto removed from other list while appending
  task.addEventListener("click", () => {
    task.classList.toggle("finished");
    if (task.parentElement.id == "finished-tasks") {
      pendingTasks.appendChild(task);
    } else {
      finishedTasks.appendChild(task);
    }
  });
});

clearDone.addEventListener("click", () => {
  finishedTasks.innerHTML = "";
});

clearInput.addEventListener("click", () => {
  newTaskInput.value = "";
});
