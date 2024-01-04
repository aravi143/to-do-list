const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const tasks = []; 
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskPriority = document.getElementById('task-priority').value;

    const newTask = {
        name: taskName,
        dueDate: taskDueDate,
        priority: taskPriority,
        status: 'to-do'
    };

    tasks.push(newTask);
    displayTasks();
    saveTasksToLocalStorage();

    taskForm.reset(); 
});


function displayTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach(task => {
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    });
}

function createTaskElement(task) {
    const taskItem = document.createElement('li');

    taskItem.textContent = task.name;

    return taskItem;
}


function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        displayTasks();
    }
}

loadTasksFromLocal