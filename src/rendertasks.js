import { projectArrays } from "./projects.js";
import { Tasks } from "./task.js";

function renderArrayToPage(array) { //takes an array of tasks and renders them to the page 
    const mainContent = document.querySelector('.main-content');
    const arrayContainer = document.createElement('div');
    arrayContainer.classList.add('array-container');
    mainContent.appendChild(arrayContainer);
    array.forEach(item => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        arrayContainer.appendChild(taskContainer);
        const taskName = document.createElement('h2');
        taskName.textContent = item.taskname;
        taskContainer.appendChild(taskName);
        const taskDesc = document.createElement('p');
        taskDesc.textContent = item.taskdesc;
        taskContainer.appendChild(taskDesc);
        const taskDate = document.createElement('p');
        taskDate.textContent = item.taskdate;
        taskContainer.appendChild(taskDate);
        const taskProject = document.createElement('p');
        taskProject.textContent = item.project;
        taskContainer.appendChild(taskProject);
        const taskPriority = document.createElement('p');
        taskPriority.textContent = item.priority;
        taskContainer.appendChild(taskPriority);
        

    })
    



}

export { renderArrayToPage };