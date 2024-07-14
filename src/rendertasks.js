import { projectArrays } from "./projects.js";
import { Tasks } from "./task.js";
import { format } from 'date-fns';
import { expandTask } from "./expandtask.js";

function renderArrayToPage(array, page) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return format(date, "MMMM do");
  }

  // Takes an array of tasks and renders them to the page
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "";
  const arrayContainer = document.createElement("div");
  arrayContainer.classList.add("array-container");
  mainContent.appendChild(arrayContainer);

  array.forEach((item) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    arrayContainer.appendChild(taskContainer);

    const taskContainerTop  = document.createElement("div");
    taskContainerTop.classList.add("task-container-top");
    taskContainer.appendChild(taskContainerTop);

    //top of the task box:

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskContainerTop.appendChild(taskCheckbox);

    const taskName = document.createElement("h4");
    taskName.textContent = item.taskname;
    taskName.classList.add("task-name");
    taskContainerTop.appendChild(taskName);

    //middle of taskbox:

    const taskContainerMiddle = document.createElement("div");
    taskContainerMiddle.classList.add("task-container-middle");
    taskContainer.appendChild(taskContainerMiddle);

    const taskDate = document.createElement("p");
    taskDate.textContent = formatDate(item.taskdate); // Use formatDate here
    taskDate.classList.add("task-date");
    taskContainer.appendChild(taskDate);

    //bottom of taskbox:
    
    const taskContainerBottom = document.createElement("div");
    taskContainerBottom.classList.add("task-container-bottom");
    taskContainer.appendChild(taskContainerBottom);

    const taskProject = document.createElement("p");
    taskProject.textContent = "# " + item.project;
    taskProject.classList.add("task-project");
    taskContainerBottom.appendChild(taskProject);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    taskContainerBottom.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {  
      const index = array.indexOf(item);
      array.splice(index, 1);
      renderArrayToPage(array);
    });

    const expandButton = document.createElement("button");
    expandButton.textContent = "Expand";
    expandButton.classList.add("expand-button");
    taskContainerBottom.appendChild(expandButton);

    expandButton.addEventListener("click", () => {
      expandTask(item);
    });
    
  });
}

export { renderArrayToPage };
