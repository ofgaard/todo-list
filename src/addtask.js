import { Tasks, todayTasks, thisMonthTasks, thisWeekTasks, upcomingTasks } from "./task.js";
import { projectArrays } from "./projects.js";
import {isToday, isThisWeek, isThisMonth, isPast, pastTasks, format, parse, } from 'date-fns';
import { is } from "date-fns/locale";

export function addTask(taskname, tasdesc, taskdate, project, priority) { //create a new task for the todo list 
    const parsedDate = parse(taskdate, 'yyyy-MM-dd', new Date());
    const task = {
        taskname: taskname,
        taskdesc: tasdesc,
        taskdate: parsedDate,
        project: project,
        priority: priority,
        isComplete: false
    };

    //add the task to a project

    if (projectArrays.hasOwnProperty(project)) { //if the project already exists, add the task to the project
        projectArrays[project].push(task);
    } else {
        projectArrays[project] = [task]; //if the project does not exist, create a new project and add the task to it
    }

    //add the task to the correct array based on the date - decide if the task is today or upcoming

    if (isToday(parsedDate)) {
        todayTasks.push(task);
    } else if (isThisWeek(parsedDate)) {
        thisWeekTasks.push(task);
        upcomingTasks.push(task);
    }
    else if (isThisMonth(parsedDate)) {
        thisMonthTasks.push(task);
        upcomingTasks.push(task);
    } else if (isPast(parsedDate)) {
        pastTasks.push(task); 
    }
     else {
        upcomingTasks.push(task);
    }
    



    Tasks.push(task); //add the task to the task array
   
    return task;
}