import Project from './project.js';
import myProjectsList from './index.js';
import ProjectForm from './project-form.js';
import TaskForm from './task-form.js';

export default class WebpageController {
    renderHomepage() {
        this.renderProjects();
        this.initAddProjectButton();
        this.initProjectButton();
        this.initSubmitTaskFormButton()
    };

    renderProjects() {
        const projectsList = document.querySelector('ul.projects-list');

        projectsList.innerHTML = ''; 
        myProjectsList.projects.forEach((element) => {          
            projectsList.appendChild(this.renderProjectElement(element.name));           
        });
    };     

    renderProjectElement(projectName) {
        const projectWrap = document.createElement('li');
        const projectElement = document.createElement('button');

        projectElement.textContent = projectName; 
        projectElement.id =  projectName;          
        projectWrap.appendChild(projectElement);
        return projectWrap;       
    };

    renderProjectContent(projectName) {
        const projectContent = document.querySelector('.project-content');

        projectContent.innerHTML = `
           <h1>${projectName}</h1>
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
            this.renderProjects();
            this.initProjectButton();
        });
    };

    initProjectButton() {       
        myProjectsList.projects.forEach((e) => {
            let projectName = e.name;        
            const buttonProject = document.getElementById(`${projectName}`);
            buttonProject.addEventListener('click',()  => {              
                this.renderProjectContent(e.name);               
                this.initAddTaskButton()  
            });                    
        });           
    };

    initAddTaskButton() {        
        const buttonAddTask = document.querySelector('.button-add-task');       
        // console.log(buttonAddTask)
        buttonAddTask.addEventListener('click', () => {
            const dialog = document.querySelector('dialog');
            dialog.show();           
        });
    };
    
    initSubmitTaskFormButton() {
        const buttonAddProject = document.getElementById('task-form-submit-button'); 

        buttonAddProject.addEventListener('click', () => {    
        const taskForm = new TaskForm; 
        taskForm.submitTask();
        // console.log(myProjectsList)      
            this.renderProjects();
            this.initProjectButton();
        });
    };
};

