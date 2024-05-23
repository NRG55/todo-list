import myProjectsList from './index.js';
import Project from './project.js';
import Task from './task.js';

export default class ProjectTaskList {
    #projects;
    #allTasks

    constructor() {
        this.#projects = [];
        this.#allTasks = [];        
        this.#projects.push(new Project('Project1'));
        this.#projects.push(new Project('Project2'));
        this.#projects.push(new Project('Project3'));
    };

    // set projects(value) {
    //     this.#projects = value;
    // };

    get projects() {
        return this.#projects;
    };

    get allTasks() {
        return this.#allTasks;
    }

    addProject(value) {
        if (this.projects.some((project) => project.name === value)) {
           return console.log('Project exists!')
        };

        this.#projects.push(new Project(value));
    };

    isProjectExists(value) {
        if (this.projects.some((project) => project.name === value)) {
            return true;
         };
         
         return false;
    };

    clearProjects() {
        return this.#projects = [];
    };

    addTask(name, description, notes, dueDate, priority, project) {
        // const newTask = new Task(name, description, notes, dueDate, priority, project);        
        this.#allTasks.push(new Task(name, description, notes, dueDate, priority, project))
        // if(project === 'tasks') { 
        //   this.#allTasks.push(newTask)
        // } else {
        //     const currentProject = myProjectsList.projects.find(e => e.name === project);
        //     currentProject.tasks.push(newTask);
        // };        
    };

    getTasksByProject(project) {
        let tasks = this.#allTasks.filter(element => element.project === project);
        return tasks;
    };
};