import Task from "./task";
import Project from './project.js';
import myProjectsList from "./index.js";

export default class TaskForm {    
    renderTaskForm() {
        const form = document.querySelector('.task-form');

        const nameWrap = document.createElement('div');
        const nameLabel = document.createElement('label');
        const nameInput = document.createElement('input');

    };

    submitTask() {
        const form = document.querySelector('.task-form');
        const name = form.querySelector('.task-form-input-name').value;
        const description = form.querySelector('.task-form-input-description').value;
        const notes = form.querySelector('.task-form-input-notes').value;
        const dueDate = form.querySelector('.task-form-input-duedate').value;
        const priority = form.querySelector('.task-form-select-priority').value;
        const project = form.querySelector('.task-form-select-project').value;
        
        // form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        // })
        // const newTask = new Task(name, description, notes, dueDate, priority, project);
        // myProjectsList.addProject('Test');
        myProjectsList.addTask(name, description, notes, dueDate, priority, project)
        console.log(myProjectsList)
        
    };

    addProjectsToSelectBox() {
        const selectBox = document.getElementById('link');
        
        selectBox.textContent = "";
        myProjectsList.projects.forEach(project => {
            const projectOption = document.createElement('option');

            projectOption.value = project.name;
            projectOption.textContent = project.name;
            selectBox.appendChild(projectOption)
        });
    };

};

