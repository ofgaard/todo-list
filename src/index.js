import './style.css';
import { Tasks } from './task.js';
import { addTask } from './addtask.js';
import { projectArrays } from './projects.js';
import { renderArrayToPage } from './rendertasks.js';
import { renderTodayPage } from './today.js';

console.log ('Hello, World!');

addTask('Task 1', 'Description 1', '2021-01-01', 'Project 1', 'High');

console.log(Tasks);

console.log(projectArrays);

renderArrayToPage(Tasks);

const todayPage = document.querySelector('.today');

todayPage.addEventListener('click', () => {
    renderTodayPage();
});
