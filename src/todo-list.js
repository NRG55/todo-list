import Project from './project.js';
import Task from './task.js';

export default class TodoList {
    #projects;

    constructor() {
        this.#projects = [];
        this.#projects.push(new Project('Test Project'));
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
    }
};