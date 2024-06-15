// import myProjectsList from './index.js';
import { todoList } from './todo-list.js';
import { renderElement } from './elements.js';
import { createDefaultData } from './defaultData.js';
import { updateNumberOfTasks, getNumberOfTasksTasksButton, updateNumberOfTasksHeader, updateNumberOfTasksProjectButtons, updateNumberOfTasksTasksButton } from './task-display-controller.js';
import { selectCurrentProject, isTaskFormValid } from './task-form-controller.js';
import { setTodayDate } from './task-form-controller.js';


export default class WebpageController {
    renderHomepage() { 
        createDefaultData();
        this.initTasksContainer();    
        this.initLeftSidebar();                   
    };

    initTasksButtons() {
        const allTasksButton = document.querySelector('.all-tasks-button');
        const todayTasksButton = document.querySelector('.today-tasks-button');
        const overdueTasksButton = document.querySelector('.overdue-tasks-button');
       
        allTasksButton.addEventListener('click', () => { 
                  
            this.updateHeader("All Tasks");
            this.renderTasks("All Tasks");
            this.removeLinkedProject();                 
        });

        todayTasksButton.addEventListener('click', () => {            
            this.updateHeader("Today");           
            this.renderTasks("Today");              
        });

        overdueTasksButton.addEventListener('click', () => {            
            this.updateHeader("Overdue");
            this.renderTasks("Overdue");          
        });
    };

    renderProjectButtons() {
        const addProjectContainer = document.querySelector('.left-sidebar-projects-container');
        addProjectContainer.innerHTML = "";
        
        // const renderElement = new RenderElement();
        const projects = todoList.projects;

        projects.forEach((element, index) => {           
            const button = renderElement.leftSidebarProjectButton(element.name, index); 

            button.onclick = (e)=> {
                    const projectName = button.id;
                   
                     if (e.target.classList.contains("project-popup-edit-button") || e.target.classList.contains("project-rename-ok-button")) { button.classList.remove("left-sidebar-project-button");                      
                        return;
                     } else {
                    this.updateHeader(projectName);
                    this.renderTasks(projectName); 
                    updateNumberOfTasks(projectName);                   
                    this.removeLinkedProject();
                     }};               

            addProjectContainer.appendChild(button);            
        });        
    };     

    initLeftSidebar() {
        const allTasksContainer = document.querySelector('.all-tasks'); 
        const addProjectButton = document.querySelector('.add-project-button');  
       
        // const renderElement = new RenderElement();

        allTasksContainer.appendChild(renderElement.leftSidebarTasksButtons());       
      
        addProjectButton.addEventListener('click', () => {          
            this.openAddProjectForm();                      
        });        
        this.renderProjectButtons();
        updateNumberOfTasksProjectButtons();
        updateNumberOfTasksTasksButton();
        this.initTasksButtons();       
    };

    updateHeader(title) {
        const header = document.querySelector(".task-container-header-name");      
        
        if (title === "tasks") {
            header.innerHTML = "All Tasks";
            return;
        };

        header.innerHTML = title;
        updateNumberOfTasksHeader();        
    };

    openAddProjectForm() {       
        const projectsContainer = document.querySelector('.left-sidebar-projects-container');
        const projectFormContainer = document.querySelector('.left-sidebar-project-form');
        const addProjectButton = document.querySelector('.add-project-button');
        // const renderElement = new RenderElement();
        const form = renderElement.projectForm();

        projectFormContainer.appendChild(form);

        const projectForm = document.getElementById('project-form');
        const projectNameInput = document.getElementById('projectName');
        const cancelButton = document.getElementById('project-form-cancel-button');  

        projectNameInput.focus();
        addProjectButton.style.display = 'none';
       
        projectNameInput.addEventListener('invalid', (e) => {
            e.preventDefault(); 
            
            projectNameInput.classList.add('error');
            projectNameInput.focus();
          }, false);
       
        projectForm.addEventListener("submit", (event) => {
            event.preventDefault(); 
           
            if(todoList.isProjectExists(projectName.value)) {
                const warning = document.querySelector('.project-warning');

                warning.innerHTML = "Project already exists";
                projectNameInput.classList.add('error');
                projectNameInput.focus();
                return;
            };            

            todoList.addProject(projectName.value);
            const project = projectName.value;            
               
            projectsContainer.innerHTML = "";
            projectFormContainer.innerHTML = "";

            this.renderProjectButtons(); 
            updateNumberOfTasks(project);
            addProjectButton.style.display = 'block';                               
        }); 
        
        cancelButton.addEventListener('click', () => {
            projectFormContainer.innerHTML = "";
            addProjectButton.style.display = 'block';     
        });
    };
    
    initTasksContainer() {
        const tasksContainer = document.querySelector('.tasks-container-header');       
        // const renderElement = new RenderElement();
        const header = renderElement.taskContainerHeader();

        tasksContainer.appendChild(header);
     
        this.updateHeader("All Tasks");        

        const addTask = document.querySelector('.add-task-button');
       
        this.renderTasks("All Tasks");

        addTask.addEventListener("click", () => {           
            this.renderAddTaskForm();
            selectCurrentProject();
        });
    };

    renderAddTaskForm(taskToEdit) {
        const dialog = document.querySelector('.task-form-dialog');
        // const renderElement = new RenderElement();
        const form = renderElement.taskForm(taskToEdit);

        dialog.textContent = "";
        dialog.appendChild(form);    
       
        setTodayDate();

        const taskForm = document.getElementById('task-form');       
        const closeButton = document.querySelector(".task-form-close-button");
        

        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();             
            
            if (!isTaskFormValid()) {
                this.renderAddTaskForm(taskToEdit);
                const taskNameInput = document.querySelector(".task-form-name-input");                      
                   
                taskNameInput.classList.add('error');
                taskNameInput.value = "";
                taskNameInput.focus();
                
                return;
            };
            
            if (taskToEdit) {
                setTodayDate();
               todoList.updateTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value, taskToEdit.id);
            } else {
               
            todoList.addTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value); 
            };            
          
            this.renderTasks(selectProject.value);
            this.updateHeader(selectProject.value);
            updateNumberOfTasks(selectProject.value); 
            this.removeLinkedProject();            

            dialog.close();                     
            });              
        
        closeButton.addEventListener('click', (e) => {
            e.preventDefault(); 
               dialog.close();              
        });
        
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
               
                dialog.close();
            };
        });

        dialog.showModal();
    };

    renderTasks(project) {
        const tasksContainer = document.querySelector('.tasks-container');
        // const renderElement = new RenderElement();

        tasksContainer.innerHTML = "";
        
        if (project === "All Tasks") {
            todoList.tasks.forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksContainer.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(project);
             this.addEventListenerToTaskEditButton(); 

            return;           
        };
       
        if (project === "Today") {
            todoList.getTodayTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksContainer.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(project);
            this.addEventListenerToTaskEditButton(); 

            return;           
        };

        if (project === "Overdue") {
            todoList.getOverdueTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksContainer.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(project);
            this.addEventListenerToTaskEditButton(); 
          
            return;           
        };       
        
        let tasks = todoList.getTasksByProject(project);

        tasks.forEach((element) => {
            const task = renderElement.taskContent(element);
            
            tasksContainer.appendChild(task);           
        });

        this.addEventListenerToTaskDeletButton(project);
        this.addEventListenerToTaskEditButton(); 
    }; 

    addEventListenerToTaskDeletButton(project) {
        const deleteTaskButtons = document.querySelectorAll(".task-delete-button");

        deleteTaskButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskId = e.target.id;
                console.log(taskId)

                todoList.removeTask(taskId);            
                     
            this.renderTasks(project);
            this.removeLinkedProject();
            updateNumberOfTasksProjectButtons();
            updateNumberOfTasksTasksButton();
            updateNumberOfTasksHeader();
            });
        });       
    };

    addEventListenerToTaskEditButton() {
        const editTaskButtons = document.querySelectorAll(".task-edit-button");        

        editTaskButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskId = e.target.id.slice(17, 30);
                const task = todoList.getTaskById(taskId);               
               
                this.renderAddTaskForm(task);          
            });
        });       
    };

    removeLinkedProject() {
        const headerProjectName = document.querySelector(".task-container-header-name").innerHTML;
        const linkedProjectContainers = document.querySelectorAll(".linked-project-container");
        const linkedProject = document.querySelector(".linked-project");    
       
        linkedProjectContainers.forEach((element) => {         

            if (headerProjectName === linkedProject.innerHTML) {                
               element.remove();
            };
        });
    };
};

