import { renderArrayToPage } from "./rendertasks.js";
import { todayTasks } from "./task.js";

export function renderTodayPage() {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = "";
  const todayContainer = document.createElement("div");
  todayContainer.classList.add("today-container");
  mainContent.appendChild(todayContainer);
  const todayHeader = document.createElement("h1");
  todayHeader.textContent = "Today";
  todayContainer.appendChild(todayHeader);
  const todayArrayContainer = document.createElement("div");
  todayArrayContainer.classList.add("array-container");
  todayContainer.appendChild(todayArrayContainer);

  renderArrayToPage(todayTasks, todayArrayContainer);
}