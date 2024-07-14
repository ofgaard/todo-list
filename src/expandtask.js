import { format } from 'date-fns';
import { parse } from 'date-fns';
import { editTask } from './edittask.js';
import { renderArrayToPage } from './rendertasks.js';

export function expandTask(task, updateCallback) {
    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return format(date, "MMMM do");
    }

    const mainContent = document.querySelector('.main-content');
    const taskModal = document.createElement('div');
    taskModal.classList.add('expanded-task-modal');
    mainContent.appendChild(taskModal);

    const expandedTaskContainer = document.createElement('div');
    expandedTaskContainer.classList.add('expanded-task-container');
    taskModal.appendChild(expandedTaskContainer);

    const taskName = document.createElement('h2');
    taskName.textContent = task.taskname;
    taskName.classList.add('expanded-task-name');
    expandedTaskContainer.appendChild(taskName);

    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.taskdesc;
    taskDescription.classList.add('expanded-task-description');
    expandedTaskContainer.appendChild(taskDescription);

    const taskDate = document.createElement('p');
    taskDate.textContent = formatDate(task.taskdate);
    taskDate.classList.add('expanded-task-date');
    expandedTaskContainer.appendChild(taskDate);

    const taskProject = document.createElement('p');
    taskProject.textContent = task.project;
    taskProject.classList.add('expanded-task-project');
    expandedTaskContainer.appendChild(taskProject);

    const taskPriority = document.createElement('p');
    taskPriority.textContent = task.priority;
    taskPriority.classList.add('expanded-task-priority');
    expandedTaskContainer.appendChild(taskPriority);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('expanded-task-close');
    expandedTaskContainer.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        taskModal.remove();
        if (updateCallback) updateCallback();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('expanded-task-edit');
    expandedTaskContainer.appendChild(editButton);

    editButton.addEventListener('click', () => {
        editTask(task, () => {
            taskModal.remove();
            expandTask(task, updateCallback);
        });
    });
};
