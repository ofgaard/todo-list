import { projectArrays } from "./projects";
import { Tasks } from "./task";

export function addProject(projectname) {
  //create a new project
  if (projectArrays.hasOwnProperty(projectname)) {
    console.error(`Project ${projectname} already exists`);
    return;
  }

  projectArrays[projectname] = [];
}
