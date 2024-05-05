import Project from './project.js';
import Task from './task.js';

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Test Project'));
    };
}