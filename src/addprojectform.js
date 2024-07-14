import { add } from "date-fns";
import { addProject } from "./addproject.js";
import { projectArrays } from "./projects.js";
import { renderProjectMenu } from "./renderprojectmenu.js";

export function addProjectForm() {
  //create a form to add a new project
  const mainContent = document.querySelector(".main-content");
  const addProjectModal = document.createElement("div");
  addProjectModal.classList.add("project-modal");
  mainContent.appendChild(addProjectModal);
  const form = document.createElement("form");
  form.classList.add("form");
  addProjectModal.appendChild(form);

  const projectInput = document.createElement("input");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("placeholder", "Project Name");
  projectInput.classList.add("project-name");
  form.appendChild(projectInput);

  const formButtons = document.createElement("div");
  formButtons.classList.add("form-buttons");
  form.appendChild(formButtons);

  const submitButton = document.createElement("button");
  submitButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  submitButton.classList.add("submit-button");
  formButtons.appendChild(submitButton);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const projectName = projectInput.value;
    addProject(projectName);
    renderProjectMenu();
    console.log(projectArrays);
    form.remove();
    addProjectModal.remove();
  });

  const closeButton = document.createElement("button");
  closeButton.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
  closeButton.classList.add("close-button");
  formButtons.appendChild(closeButton);
}
