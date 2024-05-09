import Project from './project.js';
import myProjectsList from './index.js';

export default class WebpageController {
    renderHomepage() {
        this.renderProjects();
        this.initAddProjectButton();
        this.initProjectButton()
    }

    renderProjects() {
        myProjectsList.projects.forEach((element) => {            
            this.renderProject(element.name);  
        });
    };     

    renderProject(projectName) {
        const projectsListHtml = document.querySelector('.projects-list');

        projectsListHtml.innerHTML += `
           <button class="button-project" id="${projectName}">
              ${projectName}
              <span 
               id="close"
               onclick="this.parentNode.remove();">
               x
               </span> 
           </button>
        `               
    };

    renderProjectContent(projectName) {
        const projectContent = document.querySelector('.project-content');

        projectContent.innerHTML = `
           <h1>${projectName}</h1>
           <button class="button-add-task">+ Add task</button>
        `        
    };

    initAddProjectButton() {        
        const buttonAddProject = document.querySelector('.button-add-project-popup');  
        const projectsListHtml = document.querySelector('.projects-list');         
      
        buttonAddProject.addEventListener('click', () => {
            this.addProject();
            projectsListHtml.innerHTML = "Projects: "
            this.renderProjects()
            this.initProjectButton()
        });
    };
    
    initProjectButton() {        
      
        myProjectsList.projects.forEach((e) => {
            let projectName = e.name;
            console.log(e.name)
            const buttonProject = document.getElementById(`${projectName}`);
            buttonProject.addEventListener('click',()  => {
                this.renderProjectContent(e.name);
            });            
        });      
    }; 
    
    addProject() {
        console.log(this)
        const input = document.querySelector('.input-add-project-popup');
        const projectName = input.value;
        console.log(projectName)

        myProjectsList.addProject(new Project(projectName));
        // console.log(myProjectsList)
        this.renderProject(projectName);
    };    
};

