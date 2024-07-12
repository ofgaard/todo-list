import { Tasks } from "./task.js";
import { projectArrays } from "./projects.js";

export function addTask(taskname, tasdesc, taskdate, project, priority) { //create a new task for the todo list 
    const task = {
        taskname: taskname,
        taskdesc: tasdesc,
        taskdate: taskdate,
        project: project,
        priority: priority
    };

    if (projectArrays.hasOwnProperty(project)) { //if the project already exists, add the task to the project
        projectArrays[project].push(task);
    } else {
        projectArrays[project] = [task]; //if the project does not exist, create a new project and add the task to it
    }

    Tasks.push(task); //add the task to the task array
   
    return task;
}