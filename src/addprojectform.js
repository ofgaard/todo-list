import { addProject } from './addproject.js';
import { projectArrays } from './projects.js';
import { renderProjectMenu } from './renderprojectmenu.js';

export function addProjectForm() { //create a form to add a new project
    const mainContent = document.querySelector('.main-content');
    const addProjectModal = document.createElement('div');
    addProjectModal.classList.add('project-modal');
    mainContent.appendChild(addProjectModal);
    const form = document.createElement('form');
    form.classList.add('form');
    addProjectModal.appendChild(form);

    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('placeholder', 'Project Name');
    projectInput.classList.add('project-name');
    form.appendChild(projectInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('submit-button');
    form.appendChild(submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = projectInput.value;
        addProject(projectName);
        renderProjectMenu();
        form.remove();
    }
    );
}
