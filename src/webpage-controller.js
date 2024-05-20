import Project from './project.js';
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

    renderProjectButtons() {
        const addProjectContainer = document.querySelector('.left-sidebar-projects-container');
        const renderElement = new RenderElement();
        const projects = myProjectsList.projects;

        projects.forEach((element) => {
            const button = renderElement.leftSidebarProjectButton(element.name);           

            button.addEventListener('click', () => {
                const projectName = button.id;
                console.log(projectName)
                this.updateHeader(projectName);
                this.renderTasks(projectName); 
                updateNumberOfTasks(projectName);          
            });
            addProjectContainer.appendChild(button);
        });      
    };   

    initLeftSidebar() {
        const addProjectButton = document.querySelector('.add-project-button');      
      
        addProjectButton.addEventListener('click', () => {          
            this.openAddProjectForm();                      
        });
        this.renderProjectButtons();
    };

    updateHeader(title) {
        const header = document.querySelector('.task-container-header-name');
        header.innerHTML = title;
    };

    openAddProjectForm() {       
        const projectsContainer = document.querySelector('.left-sidebar-projects-container');
        const projectFormContainer = document.querySelector('.left-sidebar-project-form');
        const renderElement = new RenderElement();
        const form = renderElement.projectForm();

        projectFormContainer.appendChild(form);

        const projectForm = document.getElementById('project-form'); 

        projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            myProjectsList.addProject(projectName.value);
            const project = projectName.value;            
               
            projectsContainer.innerHTML = "";
            projectFormContainer.innerHTML = "";

            this.renderProjectButtons(); 
            updateNumberOfTasks(project);                       
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
};

