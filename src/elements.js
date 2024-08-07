import Storage from "./storage.js";
import { todoList } from "./todo-list.js";
import { ui } from "./ui.js";
import { format } from "date-fns";


export default class RenderElement {
    headerAndMain() {
        const body = document.querySelector("body");
        body.innerHTML = ""; 

        const header = document.createElement("header");       
        const headerTitle = document.createElement("h1");
        headerTitle.innerHTML = "Todo";
        header.appendChild(headerTitle);

        const mainContent = document.createElement("div");
        mainContent.classList.add("main-content");
        
        body.append(header, mainContent);
        return body;
    };

    sidebar() {
        const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");

        const sidebarTasks = document.createElement("div");
        sidebarTasks.classList.add("sidebar-tasks");

        const sidebarProjects = document.createElement("div");
        sidebarProjects.classList.add("sidebar-projects");
        const sidebarProjectsTitle = document.createElement("h3");
        sidebarProjectsTitle.innerHTML = "Projects";
        const sidebarProjectsButtonsContainer = document.createElement("div");
        sidebarProjectsButtonsContainer.classList.add("sidebar-projects-buttons-container");
        const sidebarProjectFormContainer = document.createElement("div");
        sidebarProjectFormContainer.classList.add("sidebar-project-form-container");
        const sidebarAddProjectButton = document.createElement("button");
        sidebarAddProjectButton.classList.add("sidebar-add-project-button");
        sidebarAddProjectButton.innerHTML = "+ Add project";
        sidebarProjects.append(sidebarProjectsTitle, sidebarProjectsButtonsContainer, sidebarProjectFormContainer, sidebarAddProjectButton);

        sidebar.append(sidebarTasks, sidebarProjects)

        return sidebar;        
    };    

    tasksContainer() {
        const tasksContainer = document.createElement("div");
        tasksContainer.classList.add("tasks-container");
        
        const tasksDisplayHeader = this.tasksDisplayHeader();
        const tasksDisplay = document.createElement("div");
        tasksDisplay.classList.add("tasks-display");       

        const taskFormDialog = document.createElement("dialog");
        taskFormDialog.classList.add("task-form-dialog");
        
        tasksContainer.append(tasksDisplayHeader, tasksDisplay, taskFormDialog);       
       
        return tasksContainer;       
    };

    sidebarTasksButtons() {
        const buttonsWrap = document.createElement('div');
        buttonsWrap.classList.add("sidebar-tasks-buttons-container");

        const allTasksButton = document.createElement('button');
        allTasksButton.classList.add("all-tasks-button", "left-sidebar-tasks-button");

        const allTasksIconSpan = document.createElement('span');
        allTasksIconSpan.classList.add('material-symbols-outlined', "all-tasks-icon-span");
        allTasksIconSpan.textContent = 'fact_check';

        const allTaskstext = document.createElement('span');
        allTaskstext.innerHTML = "All Tasks";

        allTasksButton.append(allTasksIconSpan, allTaskstext);

        const todayTasksButton = document.createElement('button');
        todayTasksButton.classList.add("today-tasks-button", "left-sidebar-tasks-button");

        const todayTasksIconSpan = document.createElement('span');
        todayTasksIconSpan.classList.add("material-symbols-outlined", "all-tasks-icon-span");
        todayTasksIconSpan.textContent = 'calendar_month';

        const todayTasksText = document.createElement('span');
        todayTasksText.innerHTML = "Today";

        todayTasksButton.append(todayTasksIconSpan, todayTasksText);

        const overdueTasksButton = document.createElement('button');
        overdueTasksButton.classList.add("overdue-tasks-button", "left-sidebar-tasks-button");

        const overdueTasksIconSpan = document.createElement('span');
        overdueTasksIconSpan.classList.add("material-symbols-outlined", "all-tasks-icon-span");
        overdueTasksIconSpan.textContent = 'schedule';

        const overdueTasksText = document.createElement('span');
        overdueTasksText.innerHTML = "Overdue";

        overdueTasksButton.append(overdueTasksIconSpan, overdueTasksText);

        buttonsWrap.append(allTasksButton, todayTasksButton, overdueTasksButton);

        return buttonsWrap;
    };

    sidebarProjectButton(project, index) {      
        const projectButton = document.createElement("button");
        projectButton.classList.add("left-sidebar-project-button");
        projectButton.id = project

        const iconSpan = document.createElement('span');
        iconSpan.classList.add("material-symbols-outlined", "project-icon-span");
        iconSpan.textContent = 'folder'

        const text = document.createElement('span');
        text.classList.add('project-button-name-span');
        text.textContent = project;

        const settingsIcon = document.createElement('span');
        settingsIcon.classList.add('material-symbols-outlined', 'project-button-settings');
        settingsIcon.textContent = 'more_vert';       

        const projectSettingsPopup = document.createElement('div');
        projectSettingsPopup.classList.add('project-settings-popup', 'hidden');
        
        settingsIcon.onclick = () => { 
            const popups = document.querySelectorAll(".project-settings-popup");

            popups.forEach((element) => {
                element.classList.add("hidden");
            });

            if (projectSettingsPopup.classList.contains("hidden")) {
                projectSettingsPopup.classList.remove("hidden");
            } else {
                projectSettingsPopup.classList.remove("hidden");
            };

            window.onclick =  (e) => {
                if (!e.target.classList.contains("project-button-settings")) {
                    projectSettingsPopup.classList.add('hidden');
                };
            };    
        };

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('project-popup-delete-button');
        deleteButton.textContent = "Delete";
        projectSettingsPopup.appendChild(deleteButton);      

        deleteButton.onclick = (e) => {
            e.stopPropagation();           
            todoList.deleteTasksByProject(project);
            todoList.deleteProject(project); 
            Storage.Save();           
            ui.render();                     

            projectSettingsPopup.classList.remove('visible');
            return           
        };

        const editButton = document.createElement('button');
        editButton.classList.add('project-popup-edit-button');
        editButton.textContent = "Edit";
        projectSettingsPopup.appendChild(editButton);        

        editButton.onclick = () => {            
            const currentProjectButton = document.getElementById(`${project}`);                
          
            currentProjectButton.innerHTML = "";
            currentProjectButton.classList.add('remove-padding');
           
            currentProjectButton.append(this.projectRenameElement(project));
            const okButton = document.querySelector(".project-rename-ok-button");
            const cancelButton = document.querySelector(".project-rename-cancel-button");
            const renameInput = document.querySelector(".project-rename-input");
 
            const input = document.querySelector('.project-rename-input');
            input.value = project;
            input.focus();
            
            okButton.onclick = () => {                
                const newName = renameInput.value.trim();
                
                todoList.updateProjectName(index, newName);
                todoList.updateProjectNameInTasks(project, newName)           
                Storage.Save();
                ui.render(newName);                         

                const newProjectButton = document.getElementById(`${newName}`);
                newProjectButton.focus();                                            
            };

            cancelButton.onclick = () => {               
                currentProjectButton.innerHTML = "";
                currentProjectButton.classList.remove('remove-padding');
                currentProjectButton.append(iconSpan, text, settingsIcon, projectSettingsPopup);
                projectSettingsPopup.classList.remove('visible');
                currentProjectButton.classList.add("left-sidebar-project-button");
                currentProjectButton.focus();
            };
        };

        projectButton.append(iconSpan, text, settingsIcon, projectSettingsPopup);

        return projectButton;
    };

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

    projectRenameElement() {
        const renameInputWrap =  document.createElement('div');
        renameInputWrap.classList.add('project-rename-input-container'); 

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.textContent = 'folder'

        const renameInput = document.createElement('input');
        renameInput.classList.add('project-rename-input');              

        const okButton = document.createElement('button');
        const okIcon = document.createElement('span');
        okIcon.classList.add('material-symbols-outlined', 'project-rename-ok-button');
        okIcon.textContent = "check";
        okButton.appendChild(okIcon);        

        const cancelButton = document.createElement('button');
        const cancelIcon = document.createElement('span');
        cancelIcon.classList.add('material-symbols-outlined', 'project-rename-cancel-button');
        cancelIcon.textContent = "close";
        cancelButton.appendChild(cancelIcon);       

        renameInputWrap.append(iconSpan, renameInput, okButton, cancelButton);       

        return renameInputWrap;
    };   

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
        addButton.id = 'project-form-submit-button';

        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.textContent = 'Cancel';
        cancelButton.id = "project-form-cancel-button";

        buttonsContainer.append(addButton, cancelButton);        
        addProjectForm.append(projectWarning, projectInput, buttonsContainer);       

        return addProjectForm;
    };

    taskForm(taskToEdit) {
        const taskForm = document.createElement('form');
        taskForm.setAttribute("id", "task-form");    

        const taskFormLeftDiv = document.createElement('div');
        taskFormLeftDiv.classList.add("task-form-left-div"); 

        const nameWrap = document.createElement('div');
        const nameLabel = document.createElement('label');
        nameLabel.htmlFor = "title";
        nameLabel.innerHTML = "Title:";
        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.id = "title";
        nameInput.className = "task-form-name-input";
        nameInput.placeholder = "Task title (required)";
        nameInput.required = true;      
        nameWrap.append(nameLabel, nameInput);

        const descriptionWrap = document.createElement('div');
        const descriptionLabel = document.createElement('label');
        descriptionLabel.htmlFor = "description";
        descriptionLabel.innerHTML = "Description:";
        const descriptionInput = document.createElement('textarea');  
        descriptionInput.id = "description";
        descriptionInput.className = "task-form-input-description";
        descriptionWrap.append(descriptionLabel, descriptionInput);

        taskFormLeftDiv.append(nameWrap, descriptionWrap);

        const notesWrap = document.createElement('div');
        const notesLabel = document.createElement('label');
        notesLabel.htmlFor = "notes";
        notesLabel.innerHTML = "Notes:";
        const notesInput = document.createElement('input');
        notesInput.type = "text";
        notesInput.id = "notes";
        notesInput.className = "task-form-input-notes";
        notesWrap.append(notesLabel, notesInput);

        const taskFormRightDiv = document.createElement('div');
        taskFormRightDiv.classList.add("task-form-right-div");

        const dueDateWrap = document.createElement('div');
        const dueDateLabel = document.createElement('label');
        dueDateLabel.htmlFor = "duedate";
        dueDateLabel.innerHTML = "Due date:";
        const dueDateInput = document.createElement('input');
        dueDateInput.type = "date";
        dueDateInput.id = "duedate"; 
        dueDateInput.formNoValidate = true;    
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
        priorityOptionNoPriority.innerHTML = "No priority";
        const priorityOptionLow = document.createElement('option');
        priorityOptionLow.value = "low";
        priorityOptionLow.innerHTML = "Low";
        const priorityOptionMedium = document.createElement('option');
        priorityOptionMedium.value = "medium";
        priorityOptionMedium.innerHTML = "Medium";
        const priorityOptionHigh = document.createElement('option');
        priorityOptionHigh.value = "high";
        priorityOptionHigh.innerHTML = "High";
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
        selectProjectOption.value = "All Tasks";
        selectProjectOption.innerHTML = "All Tasks";
        selectProjectSelect.append(selectProjectOption);
        selectProjectWrap.append(selectProjectLabel, selectProjectSelect);

        const buttonsWrap = document.createElement('div');
        buttonsWrap.classList.add("task-form-buttons");
        const buttonSubmit = document.createElement('button');
        buttonSubmit.classList.add("task-form-submit-button");
        buttonSubmit.type = "submit";
        buttonSubmit.formNoValidate = true;
        buttonSubmit.className = "task-form-submit-button";
        buttonSubmit.innerHTML = "Submit";
        buttonSubmit.id = "task-form-submit-button";
        const buttonClose = document.createElement('button');
        buttonClose.classList.add("task-form-close-button");      
        buttonClose.className = "task-form-close-button";
        buttonClose.innerHTML = "Close";       
     
        buttonsWrap.append(buttonSubmit, buttonClose);
        
        taskFormRightDiv.append(dueDateWrap, priorityWrap, selectProjectWrap, buttonsWrap);

        taskForm.append(taskFormLeftDiv, taskFormRightDiv);
        
        if (taskToEdit) {               
            nameInput.value = taskToEdit.name;
            descriptionInput.value = taskToEdit.description;
            notesInput.value = taskToEdit.notes;
            dueDateInput.value = taskToEdit.dueDate;
            prioritySelect.value = taskToEdit.priority;
            selectProjectSelect.value = taskToEdit.project;
        };

        return taskForm;
    };

    taskContent(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');       
        taskItem.id = task.id;

        const taskInfoFirstDiv = document.createElement('div');
        taskInfoFirstDiv.classList.add('task-info-first-div');
        taskInfoFirstDiv.append(ui.taskPriorityHandler(task));
        taskItem.append(taskInfoFirstDiv);
        
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
        linkedProjectWrap.classList.add("linked-project-container");        
        const linkedProjectIcon = document.createElement('span');
        linkedProjectIcon.classList.add('material-symbols-outlined');
        linkedProjectIcon.textContent = 'folder';
        const linkedProject = document.createElement('span');
        linkedProject.classList.add("linked-project");        
        linkedProject.innerHTML = task.project;
        linkedProjectWrap.append(linkedProjectIcon, linkedProject);     
        bottomInfoLine.append(dueDateWrap, linkedProjectWrap); 

        taskInfoSecondDiv.append(taskName, taskDescription, bottomInfoLine);       
        taskItem.append(taskInfoSecondDiv);
        
        const taskInfoThirdDiv = document.createElement('div');
        taskInfoThirdDiv.classList.add("task-info-third-div")       
        const editButton = document.createElement("button");
        editButton.classList.add("material-symbols-outlined", "task-edit-button");
        editButton.setAttribute("id", `task-edit-button-${task.id}`);        
        editButton.textContent = "edit_square";
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("material-symbols-outlined", "task-delete-button");
        deleteButton.setAttribute("id", task.id);
        deleteButton.textContent = "delete";       
        taskInfoThirdDiv.append(editButton, deleteButton);

        taskItem.appendChild(taskInfoThirdDiv);        
       
        return taskItem;
    };

    tasksDisplayHeader() {
        const header = document.createElement('div');
        header.classList.add("tasks-display-header");

        const headerName = document.createElement('h2');
        headerName.classList.add("tasks-display-header-name");        
     
        const numberOfTasksSpan = document.createElement('span');
        numberOfTasksSpan.classList.add("task-container-header-span");       

        const addTaskButton = document.createElement('button');
        addTaskButton.classList.add("add-task-button");

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined', 'add-task-button-icon');
        iconSpan.textContent = 'add_circle'

        const text = document.createElement('span');
        text.textContent = "Add task";

        addTaskButton.append(iconSpan, text);
        header.append(headerName, numberOfTasksSpan, addTaskButton);
        
        return header;
    };

    resetDemoButton() {
        const resetButton = document.createElement('button');
        resetButton.classList.add("reset-demo-button");
        resetButton.innerHTML = "Reset demo";
        
        return resetButton;
    };
}

export const renderElement = new RenderElement();