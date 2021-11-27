var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create a new task
var createTaskHandler = function(event) {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// on button click, creates a new task
formEl.addEventListener('submit', createTaskHandler);
