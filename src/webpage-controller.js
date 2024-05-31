import myProjectsList from './index.js';
import RenderElement from './elements.js';
import { updateNumberOfTasks, updateNumberOfTasksAllTasksButton } from './task-display-controller.js';
import { selectCurrentProject } from './task-form-controller.js';
import { setTodayDate } from './task-form-controller.js';


export default class WebpageController {
    renderHomepage() { 
        this.initTasksContainer();    
        this.initLeftSidebar();        
                  
    };

    initTasksButtons() {
        const allTaskButton = document.querySelector('.all-tasks-button');
        allTaskButton.addEventListener('click', () => {            
            this.updateHeader("All Tasks");
            this.renderTasks(); 
           updateNumberOfTasks();  
        });
    };

    renderProjectButtons() {
        const addProjectContainer = document.querySelector('.left-sidebar-projects-container');
        addProjectContainer.innerHTML = "";
        
        const renderElement = new RenderElement();
        const projects = myProjectsList.projects;

        projects.forEach((element, index) => {
            console.log(element.name)
            const button = renderElement.leftSidebarProjectButton(element.name, index);            
            button.onclick = (e)=> {
                    const projectName = button.id;
                    console.log(e.target)
                     if (e.target.classList.contains("project-popup-edit-button") || e.target.classList.contains("project-rename-ok-button")) { button.classList.remove("left-sidebar-project-button");
                       
                        console.log('click')
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
       
        const renderElement = new RenderElement();

        allTasksContainer.appendChild(renderElement.leftSidebarTasksButtons());       
      
        addProjectButton.addEventListener('click', () => {          
            this.openAddProjectForm();                      
        });        
        this.renderProjectButtons();
        updateNumberOfTasks();
        this.initTasksButtons();
         
        // this.initProjectSettingsButton();  
    };

    updateHeader(title) {
        const header = document.querySelector('.task-container-header-name');

        if (title === "tasks") {
            header.innerHTML = "All Tasks";
            return;
        };
        
        header.innerHTML = title;
    };

    openAddProjectForm() {       
        const projectsContainer = document.querySelector('.left-sidebar-projects-container');
        const projectFormContainer = document.querySelector('.left-sidebar-project-form');
        const addProjectButton = document.querySelector('.add-project-button');
        const renderElement = new RenderElement();
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
           
            if(myProjectsList.isProjectExists(projectName.value)) {
                const warning = document.querySelector('.project-warning');

                warning.innerHTML = "Project already exists";
                projectNameInput.classList.add('error');
                projectNameInput.focus();
                return;
            };            

            myProjectsList.addProject(projectName.value);
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
        const renderElement = new RenderElement();
        const header = renderElement.taskContainerHeader();

        tasksContainer.appendChild(header);
        console.log(tasksContainer)
        this.updateHeader('tasks') 

        const addTask = document.querySelector('.add-task-button');
       
        this.renderTasks();

        addTask.addEventListener("click", () => {           
            this.renderAddTaskForm();
            selectCurrentProject();
        });
    };

    renderAddTaskForm() {
        const dialog = document.querySelector('.task-form-dialog');
        const renderElement = new RenderElement();
        const form = renderElement.taskForm();

        dialog.textContent = "";
        dialog.appendChild(form);
        setTodayDate();

        const taskForm = document.getElementById('task-form');       
        const closeButton = document.querySelector(".task-form-close-button");

        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();             
            
            myProjectsList.addTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value);           
            this.renderTasks(selectProject.value);
            this.updateHeader(selectProject.value);
            updateNumberOfTasks(selectProject.value); 
            this.removeLinkedProject();

            console.log(myProjectsList.tasks.length); 

            dialog.close();                     
            });              
        
        closeButton.addEventListener('click', (e) => {
            e.preventDefault(); 
               dialog.close();              
        });
        
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
               
                dialog.close();
            }
        })

        dialog.showModal();
    };

    renderTasks(project) {
        const tasksContainer = document.querySelector('.tasks-container');
        const renderElement = new RenderElement();

        tasksContainer.innerHTML = "";       
       
        if (project) {
            let tasks = myProjectsList.getTasksByProject(project);

            tasks.forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksContainer.appendChild(task);
            });
            return;
        }; 
        
        myProjectsList.tasks.forEach((element) => {
            const task = renderElement.taskContent(element);
           
            tasksContainer.appendChild(task);          
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

