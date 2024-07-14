import { addTask } from "./addtask.js";
import { projectArrays } from "./projects.js";
import { renderProjectMenu } from "./renderprojectmenu.js";

export function addTaskForm() {
  const mainContent = document.querySelector(".main-content");

  //create modal

  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    mainContent.removeChild(existingModal);
  }

  const modal = document.createElement("div");
  modal.classList.add("modal");
  mainContent.appendChild(modal);

  //create form
  modal.innerHTML = "";
  const form = document.createElement("form");
  form.classList.add("form");
  modal.appendChild(form);

  //create input fields

  const taskName = document.createElement("input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("placeholder", "Task Name");
  taskName.classList.add("task-name");
  form.appendChild(taskName);

  const taskDesc = document.createElement("input");
  taskDesc.setAttribute("type", "text");
  taskDesc.setAttribute("placeholder", "Task Description");
  taskDesc.classList.add("task-desc");
  form.appendChild(taskDesc);

  const taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.classList.add("task-date");
  form.appendChild(taskDate);

  //create project dropdown with possibility to add new project

  const projectDropdown = document.createElement("select");
  projectDropdown.classList.add("project-dropdown");

  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Select Project";
  projectDropdown.appendChild(defaultOption);

  for (const project in projectArrays) {
    const option = document.createElement("option");
    option.textContent = project;
    projectDropdown.appendChild(option);
  }

  const newProjectOption = document.createElement("option");
  newProjectOption.textContent = "New Project";
  projectDropdown.appendChild(newProjectOption);

  //push new project array to projectArrays

  projectDropdown.addEventListener("change", (e) => {
    if (e.target.value === "New Project") {
      const newProject = prompt("Enter new project name");
      projectArrays[newProject] = [];
      const option = document.createElement("option");
      option.textContent = newProject;
      projectDropdown.appendChild(option);
    }
  });

  form.appendChild(projectDropdown);

  //create priority dropdown

  const priorityDropdown = document.createElement("select");
  priorityDropdown.classList.add("priority-dropdown");

  const priorityDefault = document.createElement("option");
  priorityDefault.textContent = "Select Priority";
  priorityDropdown.appendChild(priorityDefault);

  const lowPriority = document.createElement("option");
  lowPriority.textContent = "Low";
  priorityDropdown.appendChild(lowPriority);

  const mediumPriority = document.createElement("option");
  mediumPriority.textContent = "Medium";
  priorityDropdown.appendChild(mediumPriority);

  const highPriority = document.createElement("option");
  highPriority.textContent = "High";
  priorityDropdown.appendChild(highPriority);

  form.appendChild(priorityDropdown);

  //create submit button

  const formButtons = document.createElement("div");
  formButtons.classList.add("form-buttons");
  form.appendChild(formButtons);


  const submitButton = document.createElement("button");
  submitButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  submitButton.classList.add("submit-button");
  formButtons.appendChild(submitButton);

  //add event listener to submit button

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      taskName.value === "" ||
      taskDesc.value === "" ||
      taskDate.value === "" ||
      projectDropdown.value === "Select Project" ||
      priorityDropdown.value === "Select Priority"
    ) {
      alert("Please fill out all fields");
      return;
    } else if (projectDropdown.value === "Select Project" || projectDropdown.value === "New Project") {
      alert("Please select a project");
      return;
    } else if (priorityDropdown.value === "Select Priority") {
      alert("Please select a priority");
      return;
    }
    else {
      const taskname = taskName.value;
      const taskdesc = taskDesc.value;
      const taskdate = taskDate.value;
      const project = projectDropdown.value;
      const priority = priorityDropdown.value;
      addTask(taskname, taskdesc, taskdate, project, priority);
      renderProjectMenu();
      modal.remove();
    }

  });

  const closeButton = document.createElement("button"); 
  closeButton.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
  closeButton.classList.add("close-button");
  formButtons.appendChild(closeButton);


  //call add task function with the input field values as arguements
}
