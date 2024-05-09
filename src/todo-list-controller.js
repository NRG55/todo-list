import Project from './project.js';
import Task from './task.js';

export default class ProjectTaskList {
    #projects;

    constructor() {
        this.#projects = [];
        this.#projects.push(new Project('Project1'));
        this.#projects.push(new Project('Project2'));
        this.#projects.push(new Project('Project3'));
    };

    set projects(value) {
        this.#projects = value;
    };

    get projects() {
        return this.#projects;
    };

    addProject(value) {
        this.#projects.push(value);
    };

    clearProjects() {
        return this.#projects = [];
    };
};