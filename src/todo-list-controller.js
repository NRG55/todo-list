import myProjectsList from './index.js';
import Project from './project.js';
import Task from './task.js';
import { isToday, isPast } from 'date-fns';

export default class ProjectTaskList {
    #projects;
    #tasks

    constructor() {
        this.#projects = [];
        this.#tasks = [];
        // this.#projects.push(new Project('Project1'));
        // this.#projects.push(new Project('Project2'));
        // this.#projects.push(new Project('Project3'));
    };

    // set projects(value) {
    //     this.#projects = value;
    // };

    get projects() {
        return this.#projects;
    };

    get tasks() {
        return this.#tasks;
    };

    addProject(value) {
        if (this.#projects.some((project) => project.name === value)) {
            return console.log('Project exists!')
        };

        this.#projects.push(new Project(value));
    };

    isProjectExists(value) {
        if (this.#projects.some((project) => project.name === value)) {
            return true;
        };

        return false;
    };

    clearProjects() {
        return this.#projects = [];
    };

    addTask(name, description, notes, dueDate, priority, project, id) {
        // const newTask = new Task(name, description, notes, dueDate, priority, project);       

        this.#tasks.push(new Task(name, description, notes, dueDate, priority, project, id = Math.random().toString(16).slice(2)));
        // if(project === 'tasks') { 
        //   this.#allTasks.push(newTask)
        // } else {
        //     const currentProject = myProjectsList.projects.find(e => e.name === project);
        //     currentProject.tasks.push(newTask);
        // };        
    };

    getTasksByProject(project) {
        let tasks = this.#tasks.filter(element => element.project === project);
        return tasks;
    };

    deleteProject(project) {
        this.#projects = this.#projects.filter(element => element.name !== project);
    };

    deleteTasksByProject(project) {
        this.#tasks = this.#tasks.filter(element => element.project !== project);
    };


    updateProjectName(index, newName) {
        // this.#projects.forEach(element => {
        //    if (element.name === oldName) {
        //     element.name = newName;
        //    };
        // });   

        // let index = this.#projects.findIndex((element) => element.name === oldName);
        this.#projects[index].name = newName;

    };

    updateProjectNameInTasks(oldName, newName) {
         this.#tasks.forEach(element => {
           if (element.project === oldName) {
            element.project = newName;
           };
        });   
    };

    removeTask(taskId) {
        // console.log(index)
        // this.#tasks.splice(index, 1);
        this.#tasks = this.#tasks.filter((element) => element.id !== taskId);       
    };

    updateTask(newName, newDescription, newNotes, newDueDate, newPriority, newProject, taskId) {
        this.#tasks.forEach(element => {
            if (element.id === taskId) {
             element.name = newName;
             element.description = newDescription;
             element.notes = newNotes;
             element.dueDate = newDueDate;
             element.priority = newPriority;
             element.project = newProject;
            };
         });         
    };
    
    getTodayTasks() {
        const todayTasks = this.#tasks.filter(element => {
            if(isToday(element.dueDate)) {                                  
              return element;
              };                   
            });
           
        return todayTasks;       
    };

    getOverdueTasks() {
        const overdueTasks = this.#tasks.filter(element => {
            if(isPast(element.dueDate) && !isToday(element.dueDate)) {            
              return element;
              };                  
            }); 

        return overdueTasks;
    };
};

