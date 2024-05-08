import Project from './project.js';
import myProjectsList from './index.js';

export default class HtmlController {
    loadWebpage() {
        this.loadProjects();
        this.initAddProjectButton();
    }

    loadProjects() {
        myProjectsList.projects.forEach((element) => {            
            this.createProjectHtml(element.name);  
        });
    };

    renderProjectsListHtml(projectsList) { 
        projectsList.forEach(element => {
           this.createProjectHtml(element);       
        });        
    };

    createProjectHtml(projectName) {
        const projectsListHtml = document.querySelector('.projects-list');

        projectsListHtml.innerHTML += `
           <button class="button-project ">
              ${projectName}
              <span 
               id="close"
               onclick="this.parentNode.remove();">
               x
               </span> 
           </button>
        `     
    };

    initAddProjectButton() {        
        const buttonAddProject = document.querySelector('.button-add-project-popup');       
       
        buttonAddProject.addEventListener('click', () => {
            this.addProject()
        });       
    };

    addProject() {
        const input = document.querySelector('.input-add-project-popup');
        const projectName = input.value;
        // console.log(projectName)

        myProjectsList.addProject(new Project(projectName));
        // console.log(myProjectsList)
        this.createProjectHtml(projectName);
    };    
}