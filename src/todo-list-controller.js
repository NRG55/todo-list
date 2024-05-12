import myProjectsList from './index.js';
import Project from './project.js';
import Task from './task.js';

export default class ProjectTaskList {
    #projects;

    constructor() {
        this.#projects = [];
        this.#projects.push(new Project('Tasks'));
        this.#projects.push(new Project('Project2'));
        this.#projects.push(new Project('Project3'));
    };

    // set projects(value) {
    //     this.#projects = value;
    // };

    get projects() {
        return this.#projects;
    };

    addProject(value) {
        this.#projects.push(new Project(value));
    };

    clearProjects() {
        return this.#projects = [];
    };

    addTask(name, description, notes, dueDate, priority, project) {
        const newTask = new Task(name, description, notes, dueDate, priority, project);

        if(project === 'Tasks') { 
          this.#projects[0].tasks.push(newTask)
        } else {
            const currentProject = myProjectsList.projects.find(e => e.name === project);
            currentProject.tasks.push(newTask);
        };        
    };
};