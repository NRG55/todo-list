import Task from "./task";
import Project from './project.js';
import myProjectsList from "./index.js";

export default class TaskForm {
    submitTask() {
        const form = document.querySelector('.task-form');
        const name = form.querySelector('.task-form-input-name').value;
        const description = form.querySelector('.task-form-input-description').value;
        const notes = form.querySelector('.task-form-input-notes').value;
        const dueDate = form.querySelector('.task-form-input-duedate').value;
        // const priority = form.querySelector('.task-form-select-priority').value;
        // const project = form.querySelector('.task-form-select-project').value;

        const newTask = new Task(name, description, notes, dueDate, 'priority', 'project');
        myProjectsList.addProject(new Project('Test'));
        myProjectsList.projects[3].addTask(newTask);

    };
};