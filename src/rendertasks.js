import { projectArrays } from "./projects.js";
import { Tasks } from "./task.js";
import { format } from 'date-fns';

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

    // const deleteButton = document.createElement("button");
    // deleteButton.textContent = "Delete";
    // taskContainerBottom.appendChild(deleteButton);

    // const expandButton = document.createElement("button");
    // expandButton.textContent = "Expand";
    // taskContainerBottom.appendChild(expandButton);
    // expandButton.addEventListener("click", () => {
    //   //open a modal that lets user see the task in more detail and edit each field
    //   const expandedTaskModal = document.createElement("div");
    //   expandedTaskModal.classList.add("expanded-task-modal");
    //   mainContent.appendChild(expandedTaskModal);
    //   const expandedTask = document.createElement("div");
    //   expandedTask.classList.add("expanded-task");
    //   expandedTaskModal.appendChild(expandedTask);
    //   const expandedTaskName = document.createElement("h2");
    //   expandedTaskName.textContent = item.taskname;
    //   const expandedTaskNameEditable = document.createElement("input");
    //   expandedTaskNameEditable.setAttribute("type", "text");
    //   expandedTaskNameEditable.value = item.taskname;
    //   expandedTask.appendChild(expandedTaskName);
    //   expandedTask.appendChild(expandedTaskNameEditable);
    //   const expandedTaskDesc = document.createElement("p");
    //   expandedTaskDesc.textContent = item.taskdesc;
    //   const expandedTaskDescEditable = document.createElement("input");
    //   expandedTaskDescEditable.setAttribute("type", "text");
    //   expandedTaskDescEditable.value = item.taskdesc;
    //   expandedTask.appendChild(expandedTaskDesc);
    //   expandedTask.appendChild(expandedTaskDescEditable);
    //   const expandedTaskDate = document.createElement("p");
    //   expandedTaskDate.textContent = formatDate(item.taskdate); // Use formatDate here
    //   const expandedTaskDateEditable = document.createElement("input");
    //   expandedTaskDateEditable.setAttribute("type", "date");
    //   expandedTaskDateEditable.value = item.taskdate;
    //   expandedTask.appendChild(expandedTaskDate);
    //   expandedTask.appendChild(expandedTaskDateEditable);
    //   const expandedTaskProject = document.createElement("p");
    //   expandedTaskProject.textContent = item.project;
    //   const expandedTaskProjectEditable = document.createElement("select");
    //   expandedTaskProjectEditable.classList.add("project-dropdown");
    //   const defaultOption = document.createElement("option");
    //   defaultOption.textContent = "Select Project";
    //   expandedTaskProjectEditable.appendChild(defaultOption);
    //   for (const project in projectArrays) {
    //     const option = document.createElement("option");
    //     option.textContent = project;
    //     expandedTaskProjectEditable.appendChild(option);
    //   }
    //   const newProjectOption = document.createElement("option");
    //   newProjectOption.textContent = "New Project";
    //   expandedTaskProjectEditable.appendChild(newProjectOption);
    //   expandedTaskProjectEditable.addEventListener("change", (e) => {
    //     if (e.target.value === "New Project") {
    //       const newProject = prompt("Enter new project name");
    //       projectArrays[newProject] = [];
    //       const option = document.createElement("option");
    //       option.textContent = newProject;
    //       expandedTaskProjectEditable.appendChild(option);
    //     }
    //   });
    //   expandedTask.appendChild(expandedTaskProject);
    //   expandedTask.appendChild(expandedTaskProjectEditable);
    //   const expandedTaskPriority = document.createElement("p");
    //   expandedTaskPriority.textContent = item.priority;
    //   const expandedTaskPriorityEditable = document.createElement("input");
    //   expandedTaskPriorityEditable.setAttribute("type", "text");
    //   expandedTaskPriorityEditable.value = item.priority;
    //   expandedTask.appendChild(expandedTaskPriority);
    //   expandedTask.appendChild(expandedTaskPriorityEditable);
    //   const closeButton = document.createElement("button");
    //   closeButton.textContent = "Close";
    //   expandedTask.appendChild(closeButton);
    //   closeButton.addEventListener("click", () => {
    //     expandedTaskModal.remove();
    //   });
    //   const saveButton = document.createElement("button");
    //   saveButton.textContent = "Save";
    //   expandedTask.appendChild(saveButton);
    //   saveButton.addEventListener("click", () => {
    //     item.taskname = expandedTaskNameEditable.value;
    //     item.taskdesc = expandedTaskDescEditable.value;
    //     item.taskdate = expandedTaskDateEditable.value;
    //     item.project = expandedTaskProjectEditable.value;
    //     item.priority = expandedTaskPriorityEditable.value;
    //     renderArrayToPage(array);
    //     expandedTaskModal.remove();
    //   });
        
    // });
    // deleteButton.addEventListener("click", () => {
    //   const index = array.indexOf(item);
    //   array.splice(index, 1);
    //   renderArrayToPage(array);
    // });
    
  });
}

export { renderArrayToPage };
