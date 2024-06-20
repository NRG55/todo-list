import myProjectsList from './index.js';
import Project from './project.js';
import Task from './task.js';
import { isToday, isPast } from 'date-fns';
import WebpageController, { webpageController } from './ui.js';

export default class TodoList {
    #projects;
    #tasks;

    constructor() {
        this.#projects = [];
        this.#tasks = [];       
    };

    setProjects(value) {
        this.#projects = value;
    };

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
        this.#tasks.push(new Task(name, description, notes, dueDate, priority, project, id = Math.random().toString(16).slice(2)));      
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
        this.#projects[index].name = newName;

    };

    updateProjectNameInTasks(oldName, newName) {
         this.#tasks.forEach(element => {
           if (element.project === oldName) {
            element.project = newName;
           };
        });   
    };

    getTaskById(taskId) {
        const task = this.#tasks.filter(element => element.id === taskId);
        return task[0];
    };

    removeTask(taskId) {       
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

    toString() {
        return JSON.stringify({
            projects: this.#projects.map(project => project.toObject()),
            tasks: this.#tasks.map(task => task.toObject())
        });
    };

    fromString(todoListString) {
        const parsedTodoList = JSON.parse(todoListString);
        
        // this.#projects = [];
        // this.#tasks = [];
       
        this.#projects = parsedTodoList.projects.map(project => Project.FromObject(project));
        this.#tasks = parsedTodoList.tasks.map(task => Task.FromObject(task));
    }
};

export const todoList = new TodoList();


