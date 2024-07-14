import { format } from "date-fns";

export function editTask(task, saveCallback) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return format(date, "yyyy-MM-dd");
  }

  const mainContent = document.querySelector(".main-content");
  const taskModal = document.createElement("div");
  taskModal.classList.add("expanded-task-modal");
  mainContent.appendChild(taskModal);

  const expandedTaskContainer = document.createElement("div");
  expandedTaskContainer.classList.add("expanded-task-container");
  taskModal.appendChild(expandedTaskContainer);

  const taskName = document.createElement("input");
  taskName.value = task.taskname;
  taskName.classList.add("expanded-task-name");
  expandedTaskContainer.appendChild(taskName);

  const taskDescription = document.createElement("textarea");
  taskDescription.value = task.taskdesc;
  taskDescription.classList.add("expanded-task-description");
  expandedTaskContainer.appendChild(taskDescription);

  const taskDate = document.createElement("input");
  taskDate.value = formatDate(task.taskdate);
  taskDate.classList.add("expanded-task-date");
  expandedTaskContainer.appendChild(taskDate);

  const taskProject = document.createElement("input");
  taskProject.value = task.project;
  taskProject.classList.add("expanded-task-project");
  expandedTaskContainer.appendChild(taskProject);

  const taskPriority = document.createElement("input");
  taskPriority.value = task.priority;
  taskPriority.classList.add("expanded-task-priority");
  expandedTaskContainer.appendChild(taskPriority);

  const formButtons = document.createElement("div");
  formButtons.classList.add("form-buttons");
  expandedTaskContainer.appendChild(formButtons);

  const saveButton = document.createElement("button");
  saveButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
  saveButton.classList.add("save-button");
  formButtons.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    task.taskname = taskName.value;
    task.taskdesc = taskDescription.value;
    task.taskdate = taskDate.value;
    task.project = taskProject.value;
    task.priority = taskPriority.value;
    if (saveCallback) saveCallback();
    taskModal.remove();
  });

  const closeButton = document.createElement("button");
  closeButton.innerHTML = '<i class="fa-regular fa-rectangle-xmark"></i>';
  closeButton.classList.add("close-button");
  formButtons.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    taskModal.remove();
  });
}
