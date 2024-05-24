import myProjectsList from "./index.js";
import WebpageController from "./webpage-controller.js";
import { handleDate, setTodayDate } from "./task-form-controller.js";
import { addProjectsToSelectBox, selectCurrentProject } from "./task-form-controller.js";
import { taskPriorityHandler } from "./task-display-controller.js";
import { format } from "date-fns";

export default class RenderElement {
    leftSidebarTasksButtons() {
        const buttonsWrap = document.createElement('div');
        buttonsWrap.classList.add('left-sidebar-all-tasks');

        const allTasksButton = document.createElement('button');
        allTasksButton.classList.add('all-tasks-button');            

        const allTasksIconSpan = document.createElement('span');
        allTasksIconSpan.classList.add('material-symbols-outlined');
        allTasksIconSpan.textContent = 'fact_check';       

        const allTaskstext = document.createElement('span');
        allTaskstext.innerHTML = "All Tasks";   

        allTasksButton.append(allTasksIconSpan, allTaskstext);        

        const todayTasksButton = document.createElement('button');
        todayTasksButton.classList.add('today-tasks-button');      

        const todayTasksIconSpan = document.createElement('span');
        todayTasksIconSpan.classList.add('material-symbols-outlined');
        todayTasksIconSpan.textContent = 'calendar_month';       

        const todayTasksText = document.createElement('span');
        todayTasksText.innerHTML = "Today";   

        todayTasksButton.append(todayTasksIconSpan, todayTasksText);
        
        const overdueTasksButton = document.createElement('button');
        overdueTasksButton.classList.add('overdue-tasks-button');      

        const overdueTasksIconSpan = document.createElement('span');
        overdueTasksIconSpan.classList.add('material-symbols-outlined');
        overdueTasksIconSpan.textContent = 'schedule';       

        const overdueTasksText = document.createElement('span');
        overdueTasksText.innerHTML = "Overdue";   

        overdueTasksButton.append(overdueTasksIconSpan, overdueTasksText);

        buttonsWrap.append(allTasksButton, todayTasksButton, overdueTasksButton);

        return buttonsWrap;

    }

    leftSidebarProjectButton(project) {
        const projectButton = document.createElement("button");
        projectButton.classList.add("left-sidebar-project-button");      
        projectButton.id = project

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.textContent = 'folder'       

        const text = document.createElement('span');
        text.classList.add('project-button-name-span');
        text.textContent = project;

        const settingsIcon = document.createElement('span');        
        settingsIcon.classList.add( 'material-symbols-outlined', 'project-button-settings');
        settingsIcon.textContent = 'more_vert'; 
        // settings.appendChild(this.projectSettingsMenu());

        settingsIcon.onclick = (e) => {           
            projectSettingsPopup.classList.add('visible');
        };

        const projectSettingsPopup = document.createElement('div');
        projectSettingsPopup.classList.add('project-settings-popup', 'hidden');
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('project-popup-delete-button');
        deleteButton.textContent = "Delete";
        projectSettingsPopup.appendChild(deleteButton);
        // settingsIcon.appendChild(projectSettingsPopup); 

        deleteButton.onclick = (e) => {
            const projectName = e.target.parentNode.parentNode.id;
        
            myProjectsList.deleteProjectAndProjectTasks(projectName);
            projectSettingsPopup.classList.remove('visible');

            const webpageController = new WebpageController();
            webpageController.renderProjectButtons();
            console.log(myProjectsList)
           
        };
    

        projectButton.append(iconSpan, text, settingsIcon, projectSettingsPopup);       

        return projectButton;
    }; 

    // projectSettingsMenu() {       
    //     const menuSpan = document.createElement('span');

    //     menuSpan.className = 'project-settings-menu';
    //     menuSpan.classList.add('material-symbols-outlined');
    //     menuSpan.textContent = 'more_vert';                
    //     // menuSpan.append(this.projectEditButton(), this. projectDeleteButton()); 
    //     return menuSpan;
    // }; 
    
    projectSettingsOptions() {

    const optionsWrap = document.createElement('div');
    optionsWrap.classList.add('project-button-options');

    const editButton = document.createElement('button');
    editButton.classList.add('project-button-edit');
    editButton.textContent = 'Edit';
    optionsWrap.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('project-delete');
    deleteButton.textContent = 'Delete';
    optionsWrap.appendChild(deleteButton);    

    return optionsWrap;
    };

    // projectDeleteButton() {
    //     const deleteButton = document.createElement('button');

    //     deleteButton.classList.add('project-button-delete', 'setting-buttons');
    //     deleteButton.innerHTML = "Delete";

    //     return deleteButton;
    // };

    // projectEditButton() {
    //     const button = document.createElement('button');

    //     button.classList.add('project-button-edit', 'setting-buttons');
    //     button.innerHTML = "Edit";

    //     return button;
    // };
        
    projectForm() {
        const addProjectForm = document.createElement('form');
        addProjectForm.setAttribute("id", "project-form");        
        
        const projectWarning = document.createElement('div');
        projectWarning.classList.add('project-warning');

        const projectInput = document.createElement('input');
        projectInput.type = 'text';     
        projectInput.id = 'projectName';
        projectInput.className = 'input-new-project';
        projectInput.placeholder = 'Project name';
        projectInput.required = true;        

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('project-form-buttons-container');

        const addButton = document.createElement('button');
        addButton.textContent = 'Add'; 
        addButton.setAttribute('type', 'submit')
        addButton.id ='project-form-submit-button';
        
        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        cancelButton.id = "project-form-cancel-button";
       
        buttonsContainer.appendChild(addButton);
        buttonsContainer.appendChild(cancelButton);
        addProjectForm.append(projectWarning, projectInput, buttonsContainer);        
        // addProjectForm.append(buttonsContainer);

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
        // dueDateInput.className = "task-form-input-duedate"; 
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
        selectProjectSelect.append(selectProjectOption, addProjectsToSelectBox());        
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
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');       
        
        const taskInfoFirstDiv = document.createElement('div');
        taskInfoFirstDiv.classList.add('task-info-first-div');
        // const taskPrioritySpan = document.createElement("span");
        // taskPrioritySpan.className = "priority-span"
        // taskPrioritySpan.classList.add('material-symbols-outlined');
        // taskPrioritySpan.textContent = 'pen_size_1';
        // taskInfoFirstDiv.append(taskPrioritySpan)
       
        taskInfoFirstDiv.append(taskPriorityHandler(task));
        taskItem.append(taskInfoFirstDiv)
        const taskInfoSecondDiv = document.createElement('div');
        const taskName = document.createElement('h3');
        taskName.classList.add('task-name');
        taskName.innerHTML = task.name;

        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.innerHTML = task.description;

        const bottomInfoLine = document.createElement('p');
        bottomInfoLine.classList.add('task-bottom-info-line');

        const dueDateWrap = document.createElement('div');
        const dueDateIcon = document.createElement('span'); 
        dueDateIcon.classList.add('material-symbols-outlined');
        dueDateIcon.textContent = 'calendar_today';  
        const dueDate = document.createElement('span');       
        dueDate.innerHTML = format(task.dueDate, "dd MMM yy");
        dueDateWrap.append(dueDateIcon, dueDate);

        const linkedProjectWrap = document.createElement('div');
        const linkedProjectIcon = document.createElement('span'); 
        linkedProjectIcon.classList.add('material-symbols-outlined');
        linkedProjectIcon.textContent = 'folder';  
        const linkedProject = document.createElement('span');
        linkedProject.innerHTML = task.project;
        linkedProjectWrap.append(linkedProjectIcon, linkedProject);
        
        // if (task.dueDate === "") {
        //     console.log(dueDate.value)
        //     bottomInfoLine.append(linkedProjectWrap);
        // } else {
        //     console.log(dueDate.value)
            bottomInfoLine.append(dueDateWrap, linkedProjectWrap);
        // }
        taskInfoSecondDiv.append(taskName, taskDescription, bottomInfoLine)

        // taskInfoWrap.append(taskLeftSection, taskName, taskDescription, bottomInfoLine);
        taskItem.append(taskInfoSecondDiv);

        return taskItem;        
    };
   
    taskContainerHeader() {
        const header = document.createElement('div');
        header.className = "task-container-header";

        const name = document.createElement('h2');
        name.className = "task-container-header-name";
        // name.innerHTML = name;
        const numberOfTasksSpan = document.createElement('span');
        numberOfTasksSpan.className = "task-container-header-span";
        // numberOfTasksSpan.innerHTML = "(4)";
        
        const addTaskButton = document.createElement('button');
        addTaskButton.className = "add-task-button";

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined', 'add-task-button-icon');
        iconSpan.textContent = 'add_circle'       

        const text = document.createElement('span');
        text.textContent = "Add task";
        
        addTaskButton.append(iconSpan, text);      
        header.append(name, numberOfTasksSpan, addTaskButton);

        return header;
    };


}