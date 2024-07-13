import { projectArrays } from "./projects.js";
import { Tasks } from "./task.js";
import { renderArrayToPage } from "./rendertasks.js";

export function renderProjectMenu() {
  const projectsMenu = document.querySelector(".projects-menu-list");
  if (!projectsMenu) {
    console.error(".projects-menu not found");
    return;
  }
  projectsMenu.innerHTML = "";

  Object.keys(projectArrays).forEach((project) => {
    const projectButton = document.createElement("button");
    projectButton.classList.add("project-button");
    projectButton.textContent = '# ' + project;
    projectButton.addEventListener("click", () => {
      console.log(`Project ${project} clicked`);

      renderArrayToPage(projectArrays[project]);
    });
    projectsMenu.appendChild(projectButton);
  });
}
