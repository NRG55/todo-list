import { todoList } from './todo-list.js';
import { renderElement } from './elements.js';
import { updateNumberOfTasks, getNumberOfTasksTasksButton, updateNumberOfTasksHeader, updateNumberOfTasksProjectButtons, updateNumberOfTasksTasksButton } from './task-display-controller.js';
import { selectCurrentProject, isTaskFormValid } from './task-form-controller.js';
import { setTodayDate } from './task-form-controller.js';
import Storage from './storage.js';


export default class Ui {
    render(title) {
        Storage.Load();
        this.renderMainContent(title);                        
    };

    renderMainContent(title) {
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = "";       
        
        mainContent.appendChild(renderElement.sidebar());
        this.renderSidebar(); 

        mainContent.appendChild(renderElement.tasksContainer());       
        this.renderTasksContainer(title);        
    };

    // -------------SIDEBAR-------------

    renderSidebar() {         
        this.renderSidebarTasksButtons();        
        this.renderSidebarProjectsButtons();

        const addProjectButton = document.querySelector(".sidebar-add-project-button");       
      
        addProjectButton.addEventListener('click', () => {          
            this.renderAddProjectForm();                      
        });
    };

    renderSidebarTasksButtons() {
        const sidebarTasksContainer = document.querySelector('.sidebar-tasks'); 

        sidebarTasksContainer.appendChild(renderElement.sidebarTasksButtons()); 
        updateNumberOfTasksTasksButton(); 
        this.addEventListenerToTasksButtons();
    };

    addEventListenerToTasksButtons() {
        const allTasksButton = document.querySelector('.all-tasks-button');
        const todayTasksButton = document.querySelector('.today-tasks-button');
        const overdueTasksButton = document.querySelector('.overdue-tasks-button');
       
        allTasksButton.addEventListener('click', () => { 
                  
            this.renderTasksContainerHeader("All Tasks");
            this.renderTasks("All Tasks");
            this.removeLinkedProject();                 
        });

        todayTasksButton.addEventListener('click', () => {            
            this.renderTasksContainerHeader("Today");           
            this.renderTasks("Today");              
        });

        overdueTasksButton.addEventListener('click', () => {            
            this.renderTasksContainerHeader("Overdue");
            this.renderTasks("Overdue");          
        });
    };    

    renderSidebarProjectsButtons() {
        const projectsButtonsContainer = document.querySelector('.sidebar-projects-buttons-container');
        projectsButtonsContainer.innerHTML = "";        
       
        const projects = todoList.projects;

        projects.forEach((element, index) => {           
            const button = renderElement.sidebarProjectButton(element.name, index); 

            button.onclick = (e)=> {
                    const projectName = button.id;
                   
                     if (e.target.classList.contains("project-popup-edit-button") || e.target.classList.contains("project-rename-ok-button")) { button.classList.remove("left-sidebar-project-button");                      
                        return;
                     } else {
                    // this.updateHeader(projectName);
                    this.renderTasksContainerHeader(projectName)
                    this.renderTasks(projectName); 
                    // updateNumberOfTasks(projectName);                   
                    this.removeLinkedProject();
                     }};               

            projectsButtonsContainer.appendChild(button);            
        }); 
        updateNumberOfTasksProjectButtons();       
    };

    renderAddProjectForm() {       
        const projectsContainer = document.querySelector(".sidebar-projects-buttons-container");
        const projectFormContainer = document.querySelector(".sidebar-project-form-container");
        const addProjectButton = document.querySelector(".sidebar-add-project-button");
   
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
            
            const project = projectName.value;  
            todoList.addProject(project);
            Storage.Save();                     
               
            projectsContainer.innerHTML = "";
            projectFormContainer.innerHTML = "";

            this.renderSidebarProjectsButtons();
            this.renderTasksContainerHeader(project);
            this.renderTasks(project); 
         
            addProjectButton.style.display = 'block';                               
        }); 
        
        cancelButton.addEventListener('click', () => {
            projectFormContainer.innerHTML = "";
            addProjectButton.style.display = 'block';     
        });
    };    
    
     // -------------TASKS-CONTAINER-------------
    
    renderTasksContainer(title) {
        this.renderTasksContainerHeader(title);
        this.renderTasks(title);
    };

    // updateHeader(title) {
    //     const header = document.querySelector(".tasks-display-header-name");      
      
    //     if (title === "tasks") {
    //         header.innerHTML = "All Tasks";
    //         return;
    //     };

    //     header.innerHTML = title;
    //     updateNumberOfTasksHeader();        
    // };    

    renderTasksContainerHeader(title) { 
        const headerTitle = document.querySelector(".tasks-display-header-name");           
       
        if (!title) {
            headerTitle.innerHTML = "All Tasks";
            updateNumberOfTasksHeader();  
        } else {            
            headerTitle.innerHTML = title;
            updateNumberOfTasksHeader(title); 
            }; 

        const addTask = document.querySelector('.add-task-button');         

        addTask.addEventListener("click", () => {           
            this.renderAddTaskForm();
            selectCurrentProject();
        });
    };

    renderAddTaskForm(taskToEdit) {
        const dialog = document.querySelector('.task-form-dialog');   
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
               todoList.updateTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value, taskToEdit.id);
               Storage.Save();
            } else {               
                todoList.addTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value); 
                Storage.Save();
                };            
          
            this.renderTasks(selectProject.value);
            this.renderTasksContainerHeader(selectProject.value);
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

    renderTasks(title) {
        const tasksDisplay = document.querySelector(".tasks-display");      

        tasksDisplay.innerHTML = "";
        console.log(title)
        if (title === "All Tasks" || title === undefined) {
            todoList.tasks.forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksDisplay.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 

            return;           
        };
       
        if (title === "Today") {
            todoList.getTodayTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksDisplay.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 

            return;           
        };

        if (title === "Overdue") {
            todoList.getOverdueTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksDisplay.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 
          
            return;           
        };       
        
        let tasks = todoList.getTasksByProject(title);

        tasks.forEach((element) => {
            const task = renderElement.taskContent(element);
            
            tasksDisplay.appendChild(task);           
        });

        this.addEventListenerToTaskDeletButton(title);
        this.addEventListenerToTaskEditButton(); 
    }; 

    addEventListenerToTaskDeletButton(title) {
        const deleteTaskButtons = document.querySelectorAll(".task-delete-button");

        deleteTaskButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskId = e.target.id;               

                todoList.removeTask(taskId);
                Storage.Save();            
                this.render(title);     
                this.renderTasks(title);
            // this.removeLinkedProject();
            // updateNumberOfTasksProjectButtons();
            // updateNumberOfTasksTasksButton();
            // updateNumberOfTasksHeader();
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
        const headerProjectName = document.querySelector(".tasks-display-header-name").innerHTML;
        const linkedProjectContainers = document.querySelectorAll(".linked-project-container");
        const linkedProject = document.querySelector(".linked-project");    
       
        linkedProjectContainers.forEach((element) => {         

            if (headerProjectName === linkedProject.innerHTML) {                
               element.remove();
            };
        });
    };
};

export const ui = new Ui();

