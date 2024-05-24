import myProjectsList from './index.js';
import RenderElement from './elements.js';
import { updateNumberOfTasks } from './task-display-controller.js';
import { selectCurrentProject } from './task-form-controller.js';
import { setTodayDate } from './task-form-controller.js';


export default class WebpageController {
    renderHomepage() {        
        this.initLeftSidebar();        
        this.initTasksContainer();                   
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

        projects.forEach((element) => {
            const button = renderElement.leftSidebarProjectButton(element.name);           

            button.addEventListener('click', () => {
                const projectName = button.id;
               
                this.updateHeader(projectName);
                this.renderTasks(projectName); 
                updateNumberOfTasks(projectName);                
            });           

            addProjectContainer.appendChild(button);
            
        });        
    }; 
    
    // initProjectSettingsButton() {
    // const settings = document.querySelectorAll('.project-button-settings');
    // const renderElement = new RenderElement(); 

    // settings.forEach((button)=>{
    //      button.addEventListener('click', (e) => {
    //      const settingsTest = e.target.closest('.project-button-settings');

    //      settingsTest.appendChild(renderElement.projectSettingsOptions());
    //      });
    //   });
    // };

    initLeftSidebar() {
        const allTasksContainer = document.querySelector('.all-tasks'); 
        const addProjectButton = document.querySelector('.add-project-button');  
       
        const renderElement = new RenderElement();

        allTasksContainer.appendChild(renderElement.leftSidebarTasksButtons());       
      
        addProjectButton.addEventListener('click', () => {          
            this.openAddProjectForm();                      
        });        
        this.renderProjectButtons();
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

        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();            
            myProjectsList.addTask(title.value, description.value, notes.value, duedate.value, priority.value, selectProject.value);           
            this.renderTasks(selectProject.value);
            this.updateHeader(selectProject.value);
            updateNumberOfTasks(selectProject.value); 

            console.log(myProjectsList.allTasks.length) 

            dialog.close();
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
        
        myProjectsList.allTasks.forEach((element) => {
            const task = renderElement.taskContent(element);
           
            tasksContainer.appendChild(task);
        });
    }; 
    
    hideAddProjectButton() {

    }
};

