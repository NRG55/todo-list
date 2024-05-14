import Project from './project.js';
import myProjectsList from './index.js';
import ProjectForm from './project-form.js';
import TaskForm from './task-form.js';
import RenderElement from './elements.js';

export default class WebpageController {
    renderHomepage() {
        // this.renderAllTasksElement();
        // this.renderProjects();
        // this.initAddProjectButton();
        // this.initAllTasksButton();
        // this.initProjectButton(); 
        this.initLeftSidebar();      
    };

    renderProjects() {        
        const projectsList = document.querySelector('ul.projects-list-left-sidebar');

        projectsList.innerHTML = ''; 
        myProjectsList.projects.forEach((element) => {                  
            projectsList.appendChild(this.renderProjectElement(element.name));           
        });
    }; 
    
    renderAllTasksElement() {
        const allTasksDiv = document.querySelector('ul.all-tasks-left-sidebar');
        const allTasksElement = document.createElement('button');
;
        allTasksElement.innerHTML = "All tasks";
        allTasksElement.id = "all-tasks-button";

        //  console.log(myProjectsList)
        allTasksDiv.appendChild(allTasksElement);
    }

    renderProjectElement(projectName) {
        const renderElement = new RenderElement;

        
        const projectWrap = document.createElement('li');
        // const projectElement = document.createElement('button');

        // projectElement.textContent = projectName; 
        // projectElement.id =  projectName;          
        projectWrap.appendChild(renderElement.leftSidebarProjectButton(projectName));
        return projectWrap;       
    };

    renderTasksContainer(name) {
        const projectContent = document.querySelector('.tasks-container');

        projectContent.innerHTML = `
           <h2>${name}</h2>
           <button class="button-add-task">+ Add task</button>
        `        
    };   

    initAddProjectButton() {        
        const buttonAddProject = document.querySelector('.add-project-button');       
      
        buttonAddProject.addEventListener('click', () => {
            const projectForm = new ProjectForm;
            projectForm.createForm();          
            this.renderProjects()
            this.initProjectButton()
            this.initSubmitProjectFormButton(projectForm);           
        });
    };

    initSubmitProjectFormButton(projectForm) {
        const buttonAddProject = document.getElementById('submit-project-form-button');  
        
        buttonAddProject.addEventListener('click', () => {    
            projectForm.submitProject();
            projectForm.removeFormFromDOM();
            this.renderProjects();
            this.initProjectButton();           
        });
    };

    initProjectButton() { 
        let projectName = ''; 

        myProjectsList.projects.forEach((e) => {
            projectName = e.name; 

            const buttonProject = document.getElementById(`${projectName}`);
            buttonProject.addEventListener('click',()  => {              
                this.renderTasksContainer(e.name);               
                this.initAddTaskButton();  
            });                    
        });           
    };

    initAllTasksButton() {            
        const buttonProject = document.getElementById('all-tasks-button');

        buttonProject.addEventListener('click',()  => {              
            this.renderTasksContainer('All tasks');               
            this.initAddTaskButton();  
        });              
    }

    initAddTaskButton() {        
        const buttonAddTask = document.querySelector('.button-add-task');       
       
        buttonAddTask.addEventListener('click', () => {
            const dialog = document.querySelector('dialog');
            dialog.show();

            const taskForm = new TaskForm;          
            taskForm.renderTaskForm();
            taskForm.addProjectsToSelectBox(taskForm);
            this.initSubmitTaskFormButton(taskForm);           
        });
    };
    
    initSubmitTaskFormButton(taskForm) {
        const buttonAddProject = document.getElementById('task-form-submit-button'); 

        buttonAddProject.onclick = () => {
            taskForm.submitTask();
            taskForm.closeTaskForm();
        }

        // buttonAddProject.addEventListener('click', () => { 
        //     // const taskForm = new TaskForm;   
        //     taskForm.submitTask();
           
            
        //     // this.renderProjects();
        //     // this.initProjectButton();
        // });
       
    };

    initLeftSidebar() {
        const addProjectButton = document.querySelector('.add-project-button');       
      
        addProjectButton.addEventListener('click', () => {
            console.log('HEY')
            this.openAddProjectForm();
            // const projectForm = new ProjectForm;
            // projectForm.createForm();          
            // this.renderProjects()
            // this.initProjectButton()
            // this.initSubmitProjectFormButton(projectForm);           
        });
    };

    openAddProjectForm() {
        const dialog =document.querySelector('dialog');

        const renderElement = new RenderElement;
        const form = renderElement.addProjectForm();
        dialog.textContent = "";
        dialog.appendChild(form);

        const projectForm = document.querySelector('#add-project-form');
       
        projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
             const newProject = new Project(projectName.value);
            myProjectsList.addProject(projectName.value)
            console.log(myProjectsList);
            dialog.close();

        })
        dialog.showModal();
    }
    
};

