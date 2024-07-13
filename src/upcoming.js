import { renderArrayToPage } from "./rendertasks.js";
import { upcomingTasks } from "./task.js";

export function renderUpcomingPage() {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "";
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  mainContent.appendChild(taskContainer);
  const taskHeader = document.createElement("h1");
  taskHeader.textContent = "Tasks";
  taskContainer.appendChild(taskHeader);
  const taskArrayContainer = document.createElement("div");
  taskArrayContainer.classList.add("array-container");
  taskContainer.appendChild(taskArrayContainer);

  renderArrayToPage(upcomingTasks, taskArrayContainer);
}
