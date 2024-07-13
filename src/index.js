import './style.css';
import { Tasks } from './task.js';
import { addTask } from './addtask.js';
import { projectArrays } from './projects.js';
import { renderArrayToPage } from './rendertasks.js';
import { renderTodayPage } from './today.js';
import { renderProjectMenu } from './renderprojectmenu.js';
import { addProject } from './addproject.js';
import { addTaskForm } from './addtaskform.js';
import { addProjectForm } from './addprojectform.js';

console.log ('Hello, World!');

addTask('Task 1', 'Description 1', '2021-01-01', 'Project 1', 'High');

addTask('Task 2', 'Description 2', '2021-01-02', 'default', 'Medium');

console.log(Tasks);

console.log(projectArrays);

renderArrayToPage(Tasks);

const todayPage = document.querySelector('.today');

todayPage.addEventListener('click', () => {
    renderTodayPage();
});

renderProjectMenu();


console.log(projectArrays);

const addTaskButton = document.querySelector('.add-task');

addTaskButton.addEventListener('click', () => {
    addTaskForm();
});

const addProjectButton = document.querySelector('.add-project');

addProjectButton.addEventListener('click', () => {
    addProjectForm();
});
