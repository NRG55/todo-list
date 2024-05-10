import Project from './project.js';
import myProjectsList from './index.js';
import ProjectForm from './project-form.js';

export default class WebpageController {
    renderHomepage() {
        this.renderProjects();
        this.initAddProjectButton();
        this.initProjectButton()
    };

    renderProjects() {
        const projectsList = document.querySelector('ul.projects-list');        

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
        // const projectsListHtml = document.querySelector('.add-project-container');

        // projectsListHtml.innerHTML += `
        //    <button class="button-project" id="${projectName}">
        //       ${projectName}
        //       <span 
        //        id="close"
        //        onclick="this.parentNode.remove();">
        //        x
        //        </span> 
        //    </button>
        // `               
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
        // const projectsListHtml = document.querySelector('.add-project-container');         
      
        buttonAddProject.addEventListener('click', () => {
            const projectForm = new ProjectForm;
            projectForm.createForm();
            // projectForm.submitProject();
            // projectsListHtml.innerHTML = "Projects: "
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
        this.renderProjectElement(projectName);
    };    
};

