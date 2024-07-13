import { projectArrays } from "./projects.js";
import { Tasks } from "./task.js";

function renderArrayToPage(array, page) { //takes an array of tasks and renders them to the page 
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
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
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        taskContainer.appendChild(deleteButton);
        const expandButton = document.createElement('button');
        expandButton.textContent = 'Expand';
        taskContainer.appendChild(expandButton);
        expandButton.addEventListener('click', () => {
            //open a modal that lets user see the task in more detail and edit each field
          const expandedTask = document.createElement('div');
            expandedTask.classList.add('expanded-task');
            mainContent.appendChild(expandedTask);
            const expandedTaskName = document.createElement('h2');
            expandedTaskName.textContent = item.taskname;
            const expandedTaskNameEditable = document.createElement('input');
            expandedTaskNameEditable.setAttribute('type', 'text');
            expandedTaskNameEditable.value = item.taskname;
            expandedTask.appendChild(expandedTaskName);
            expandedTask.appendChild(expandedTaskNameEditable);
            const expandedTaskDesc = document.createElement('p');
            expandedTaskDesc.textContent = item.taskdesc;
            const expandedTaskDescEditable = document.createElement('input');
            expandedTaskDescEditable.setAttribute('type', 'text');
            expandedTaskDescEditable.value = item.taskdesc;
            expandedTask.appendChild(expandedTaskDesc);
            expandedTask.appendChild(expandedTaskDescEditable);
            const expandedTaskDate = document.createElement('p');
            expandedTaskDate.textContent = item.taskdate;
            const expandedTaskDateEditable = document.createElement('input');
            expandedTaskDateEditable.setAttribute('type', 'date');
            expandedTaskDateEditable.value = item.taskdate;
            expandedTask.appendChild(expandedTaskDate);
            expandedTask.appendChild(expandedTaskDateEditable);
            const expandedTaskProject = document.createElement('p');
            expandedTaskProject.textContent = item.project;
            const expandedTaskProjectEditable = document.createElement('select');
            expandedTaskProjectEditable.classList.add('project-dropdown');
            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select Project';
            expandedTaskProjectEditable.appendChild(defaultOption);
            for (const project in projectArrays) {
                const option = document.createElement('option');
                option.textContent = project;
                expandedTaskProjectEditable.appendChild(option);
            }
            const newProjectOption = document.createElement('option'); 
            newProjectOption.textContent = 'New Project';
            expandedTaskProjectEditable.appendChild(newProjectOption);
            expandedTaskProjectEditable.addEventListener('change', (e) => {
                if (e.target.value === 'New Project') {
                    const newProject = prompt('Enter new project name');
                    projectArrays[newProject] = [];
                    const option = document.createElement('option');
                    option.textContent = newProject;
                    expandedTaskProjectEditable.appendChild(option);
                }
            });
            expandedTask.appendChild(expandedTaskProject);
            expandedTask.appendChild(expandedTaskProjectEditable);
            const expandedTaskPriority = document.createElement('p');
            expandedTaskPriority.textContent = item.priority;
            const expandedTaskPriorityEditable = document.createElement('input');
            expandedTaskPriorityEditable.setAttribute('type', 'text');
            expandedTaskPriorityEditable.value = item.priority;
            expandedTask.appendChild(expandedTaskPriority);
            expandedTask.appendChild(expandedTaskPriorityEditable);
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            expandedTask.appendChild(closeButton);
            closeButton.addEventListener('click', () => {
                item.taskname = expandedTaskNameEditable.value;
                item.taskdesc = expandedTaskDescEditable.value;
                item.taskdate = expandedTaskDateEditable.value;
                item.project = expandedTaskProjectEditable.value;
    
                item.priority = expandedTaskPriorityEditable.value;
                renderArrayToPage(array);
                expandedTask.remove();
            });
        });  
        deleteButton.addEventListener('click', () => {
            const index = array.indexOf(item);
            array.splice(index, 1);
            renderArrayToPage(array);
        });
        const isCompleted = document.createElement('input');
        isCompleted.setAttribute('type', 'checkbox');
        isCompleted.checked = item.isCompleted;
        taskContainer.appendChild(isCompleted);
        isCompleted.addEventListener('change', () => {
            item.isCompleted = isCompleted.checked;
        });
        if (item.isCompleted) {
            taskContainer.classList.add('completed');
            item.isCompleted = true;
        }

        

    })
    



}

export { renderArrayToPage };