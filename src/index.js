import "./style.css";
import {
  Tasks,
  thisWeekTasks,
  todayTasks,
  thisMonthTasks,
  upcomingTasks,
} from "./task.js";
import { addTask } from "./addtask.js";
import { projectArrays } from "./projects.js";
import { renderArrayToPage } from "./rendertasks.js";
import { renderTodayPage } from "./today.js";
import { renderProjectMenu } from "./renderprojectmenu.js";
import { addProject } from "./addproject.js";
import { addTaskForm } from "./addtaskform.js";
import { addProjectForm } from "./addprojectform.js";
import { renderUpcomingPage } from "./upcoming.js";
import { format, parse } from "date-fns";

addTask("Task 1", "Description 1", "2025-01-01", "Project 1", "High");

addTask("Task 2", "Description 2", "2026-01-02", "default", "Medium");

const todayPage = document.querySelector(".today-button");
const upcomingPage = document.querySelector(".upcoming-button");

todayPage.addEventListener("click", () => {
  renderTodayPage();
  console.log(todayTasks);
});

upcomingPage.addEventListener("click", () => {
  renderUpcomingPage();
  console.log(upcomingTasks);
});

renderProjectMenu();

const addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", () => {
  addTaskForm();
});

const addProjectButton = document.querySelector(".add-project");

addProjectButton.addEventListener("click", () => {
  addProjectForm();
});
