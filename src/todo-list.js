import Project from './project.js';
import Task from './task.js';
import { isToday, isPast } from 'date-fns';

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
            return; 
        };       

        this.#projects.push(new Project(value));
    };

    isProjectExists(value) {
        return this.#projects.some((project) => project.name === value);
    };    

    addTask(name, description, notes, dueDate, priority, project, id) {
        this.#tasks.push(new Task(name, description, notes, dueDate, priority, project, id = Math.random().toString(16).slice(2)));      
    };

    getTasksByProject(project) {
        return this.#tasks.filter((task) => task.project === project);       
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
    // using a for loop instead of a forEach method because it stops looping when an element is found
       for (let i = 0; i < this.#tasks.length; i++) {
           if (this.#tasks[i].project === oldName) {
               this.#tasks[i].project === newName;
               return;
           };
       };
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


