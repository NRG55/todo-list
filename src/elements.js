import myProjectsList from "./index.js";

import { handleDate } from "./utils.js";
import { addProjectsToSelectOptgroup } from "./task-form-controller.js";
import { taskPriorityHandler } from "./task-display-controller.js";

export default class RenderElement {
    leftSidebarProjectButton(project) {
        const projectButton = document.createElement("button");
        projectButton.classList.add("left-sidebar-project-button");
        // projectButton.setAttribute("data-key", project);
        projectButton.id = project

        const image = document.createElement("img");
        image.src = '';        

        const text = document.createElement("div");
        text.textContent = project;

        const deleteProjectButtonText = document.createElement("span");        
        deleteProjectButtonText.textContent = "x";

        projectButton.appendChild(image);
        projectButton.appendChild(text);
        projectButton.appendChild(deleteProjectButtonText);

        return projectButton;
    }; 
    
    projectForm() {
        const addProjectForm = document.createElement('form');
        addProjectForm.setAttribute("id", "project-form");        

        const projectInput = document.createElement('input');
        projectInput.type = 'text';     
        projectInput.id = 'projectName';
        projectInput.className = 'input-new-project';
        projectInput.placeholder = 'Project name';
        projectInput.focus();

        const buttonsContainer = document.createElement('div');

        const addButton = document.createElement('button');
        addButton.textContent = 'Add'; 
        addButton.setAttribute('type', 'submit')
        addButton.id ='project-form-add-button';
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel'; 
       
        buttonsContainer.appendChild(addButton);
        buttonsContainer.appendChild(cancelButton);
        addProjectForm.append(projectInput);
        addProjectForm.append(buttonsContainer);

        return addProjectForm;
    };

    taskForm() {
        const taskForm = document.createElement('form');
        taskForm.setAttribute("id", "task-form")

        const nameWrap = document.createElement('div');        
        const nameLabel = document.createElement('label');
        nameLabel.htmlFor = "title";
        nameLabel.innerHTML = "Title:";          
        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.id = "title";
        nameInput.className = "task-form-input-name";
        nameInput.placeholder = "Task title (required)";
        nameInput.required = true;
        nameWrap.append(nameLabel, nameInput);
        
        const descriptionWrap = document.createElement('div');        
        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = "description";
        descriptionLabel.innerHTML = "Description:";          
        const descriptionInput = document.createElement('textarea');
        // descriptionInput.type = "text";
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
        const priorityOptionNoPriority = document.createElement('option');
        priorityOptionNoPriority.value = "no priority";
        priorityOptionNoPriority.innerHTML = "no priority";         
        const priorityOptionLow = document.createElement('option');
        priorityOptionLow.value = "low";
        priorityOptionLow.innerHTML = "low";
        const priorityOptionMedium = document.createElement('option');
        priorityOptionMedium.value = "medium";
        priorityOptionMedium.innerHTML = "medium";
        const priorityOptionHigh = document.createElement('option');
        priorityOptionHigh.value = "high";
        priorityOptionHigh.innerHTML = "high";
        prioritySelect.append(priorityOptionNoPriority, priorityOptionLow, priorityOptionMedium, priorityOptionHigh);
        priorityWrap.append(priorityLabel, prioritySelect);

        const selectProjectWrap = document.createElement('div');        
        const selectProjectLabel = document.createElement('label');
        selectProjectLabel.htmlFor = "selectProject";
        selectProjectLabel.innerHTML = "Assign to:";          
        const selectProjectSelect = document.createElement('select');       
        selectProjectSelect.id = "selectProject";
        selectProjectSelect.className = "task-form-select-project";       
        const selectProjectOption = document.createElement('option');
        selectProjectOption.value = "tasks";
        selectProjectOption.innerHTML = "All tasks";        
        selectProjectSelect.append(selectProjectOption, addProjectsToSelectOptgroup());        
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
        
        return taskForm;
    };

    taskContent(task) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        // taskContainer.id = '';

        // const taskInfoWrap = document.createElement('div');
        // taskInfoWrap.classList.add('task-info-wrap');
        
        const taskInfoFirstDiv = document.createElement('div');
        taskInfoFirstDiv.classList.add('task-info-first-div');
        // const taskPrioritySpan = document.createElement("span");
        // taskPrioritySpan.className = "priority-span"
        // taskPrioritySpan.classList.add('material-symbols-outlined');
        // taskPrioritySpan.textContent = 'pen_size_1';
        // taskInfoFirstDiv.append(taskPrioritySpan)
       
        taskInfoFirstDiv.append(taskPriorityHandler(task));
        taskContainer.append(taskInfoFirstDiv)
        const taskInfoSecondDiv = document.createElement('div');
        const taskName = document.createElement('h3');
        taskName.classList.add('task-name');
        taskName.innerHTML = task.name;

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.innerHTML = task.description;

        const bottomInfoLine = document.createElement('p');
        bottomInfoLine.classList.add('task-bottom-info-line');
        const dueDate = document.createElement('span');       
        dueDate.innerHTML = handleDate(task.dueDate);
        const linkedProject = document.createElement('span');
        linkedProject.innerHTML = task.project; 
        bottomInfoLine.append(dueDate, linkedProject) ;
        taskInfoSecondDiv.append(taskName, taskDescription, bottomInfoLine)

        // taskInfoWrap.append(taskLeftSection, taskName, taskDescription, bottomInfoLine);
        taskContainer.append(taskInfoSecondDiv);

        return taskContainer;        
    };
   
    taskContainerHeader() {
        const header = document.createElement('div');
        header.className = "task-container-header";

        const name = document.createElement('h2');
        name.innerHTML = "Project-test";
        const numberOfTasksSpan = document.createElement('span');
        numberOfTasksSpan.innerHTML = "(4)";
        
        const addTaskButton = document.createElement('button');
        addTaskButton.className = "add-task-button";
        addTaskButton.textContent = "+ Add task";
        console.log(addTaskButton)

        header.append(name, numberOfTasksSpan, addTaskButton);
        return header;
    };
}