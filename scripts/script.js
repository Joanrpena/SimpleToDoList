console.log("Script connected");

const addTaskBtn = document.querySelector('#buttonAdd').addEventListener('click', addTask);
const removeTaskBtn = document.querySelector('#buttonRemove').addEventListener('click', removeTask);



function addTask() {
    //Select targets
    const taskInput = document.querySelector('#task').value;
    const taskList = document.querySelector('#task_List');

    //Create new List Item for UL
    const newLi = document.createElement('li');

    newLi.id='id';

    //New list item will contain input field string
    newLi.innerHTML = taskInput;
    // Add task to list
    taskList.appendChild(newLi);

}

function removeTask() {
    const taskList = document.querySelector('#task_List');
    if (taskList.innerHTML){
    taskList.removeChild(taskList.lastChild);
    } else{
        return alert("List is empty.\nPlease add a task before removing.");
    }
}