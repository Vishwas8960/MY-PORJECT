// Select the elements
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event Listener for adding a task
addBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create a new list item
    const li = document.createElement('li');
    
    // Add the task text to the list item
    li.textContent = taskText;
    
    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'delete';
    deleteBtn.onclick = deleteTask;
    
    // Add task completion toggle
    li.onclick = toggleComplete;
    
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    
    // Append the list item to the task list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(event) {
    event.stopPropagation();
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Function to toggle task completion
function toggleComplete(event) {
    event.target.classList.toggle('completed');
}