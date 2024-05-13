import Task from "./task";
import Project from './project.js';
import myProjectsList from "./index.js";

export default class TaskForm {    
    renderTaskForm() {
        const taskForm = document.querySelector('.task-form');

        const nameWrap = document.createElement('div');        
        const nameLabel = document.createElement('label');
        nameLabel.htmlFor = "name";
        nameLabel.innerHTML = "Title:";          
        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.className = "task-form-input-name";
        nameWrap.append(nameLabel, nameInput);
        
        const descriptionWrap = document.createElement('div');        
        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = "description";
        descriptionLabel.innerHTML = "Description:";          
        const descriptionInput = document.createElement('input');
        descriptionInput.type = "text";
        descriptionInput.id = "description";
        descriptionInput.className = "task-form-input-description";
        descriptionWrap.append(descriptionLabel, descriptionInput);

        const notesWrap = document.createElement('div');        
        const notesLabel = document.createElement('label');
        notesLabel.htmlFor = "notes";
        notesLabel.innerHTML = "Notes:";          
        const notesInput = document.createElement('input');
        notesInput.type = "text";
        notesInput.id = "notes";
        notesInput.className = "task-form-input-notes"; 
        notesWrap.append(notesLabel, notesInput);

        const dueDateWrap = document.createElement('div');        
        const dueDateLabel = document.createElement('label');
        dueDateLabel.htmlFor = "duedate";
        dueDateLabel.innerHTML = "Due date:";          
        const dueDateInput = document.createElement('input');
        dueDateInput.type = "date";
        dueDateInput.id = "duedate";
        dueDateInput.className = "task-form-input-duedate"; 
        dueDateWrap.append(dueDateLabel, dueDateInput);

        const priorityWrap = document.createElement('div');        
        const priorityLabel = document.createElement('label');
        priorityLabel.htmlFor = "priority";
        priorityLabel.innerHTML = "Priority:";          
        const prioritySelect = document.createElement('select');        
        prioritySelect.id = "priority";
        prioritySelect.className = "task-form-select-priority";         
        const priorityOptionLow = document.createElement('option');
        priorityOptionLow.value = "low";
        priorityOptionLow.innerHTML = "low";
        const priorityOptionMedium = document.createElement('option');
        priorityOptionMedium.value = "medium";
        priorityOptionMedium.innerHTML = "medium";
        const priorityOptionHigh = document.createElement('option');
        priorityOptionHigh.value = "high";
        priorityOptionHigh.innerHTML = "high";
        prioritySelect.append(priorityOptionLow, priorityOptionMedium, priorityOptionHigh);
        priorityWrap.append(priorityLabel, prioritySelect);

        const selectProjectWrap = document.createElement('div');        
        const selectProjectLabel = document.createElement('label');
        selectProjectLabel.htmlFor = "select-project";
        selectProjectLabel.innerHTML = "Assign to:";          
        const selectProjectSelect = document.createElement('select');       
        selectProjectSelect.id = "select-project";
        selectProjectSelect.className = "task-form-select-project";       
        const selectProjectOption = document.createElement('option');
        selectProjectOption.value = "tasks";
        selectProjectOption.innerHTML = "All tasks";
        const selectProjectOptionGroup = document.createElement('optgroup');
        selectProjectOptionGroup.label = "Projects";
        selectProjectOptionGroup.id = "projects";

        selectProjectSelect.append(selectProjectOption, selectProjectOptionGroup);
        selectProjectWrap.append(selectProjectLabel, selectProjectSelect);

        const buttonsWrap = document.createElement('div');
        const buttonSubmit = document.createElement('button');
        buttonSubmit.type = "submit";
        buttonSubmit.className = "task-form-submit-button";
        buttonSubmit.innerHTML = "Submit"; 
        buttonSubmit.id = "task-form-submit-button";    
        const buttonClose = document.createElement('button');
        buttonClose.type = "submit";
        buttonClose.className = "task-form-close-button";
        buttonClose.innerHTML = "Close"; 
        buttonsWrap.append(buttonSubmit, buttonClose);
        
        taskForm.append(nameWrap, descriptionWrap, notesWrap, dueDateWrap, priorityWrap, selectProjectWrap, buttonsWrap);         
    };

    submitTask() {
        const form = document.querySelector('.task-form');
        const name = form.querySelector('.task-form-input-name').value;
        const description = form.querySelector('.task-form-input-description').value;
        const notes = form.querySelector('.task-form-input-notes').value;
        const dueDate = form.querySelector('.task-form-input-duedate').value;
        const priority = form.querySelector('.task-form-select-priority').value;
        const project = form.querySelector('.task-form-select-project').value;
        
        myProjectsList.addTask(name, description, notes, dueDate, priority, project)
        console.log(myProjectsList);        
    };

    addProjectsToSelectBox() {
        const selectBox = document.getElementById('projects');
        
        selectBox.textContent = "";
        myProjectsList.projects.forEach(project => {
            const projectOption = document.createElement('option');
            
            projectOption.value = project.name;
            projectOption.textContent = project.name;           
            if (project.name === 'Tasks') {
               return;               
             }
            selectBox.appendChild(projectOption)
        });
    };

};

