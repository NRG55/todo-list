import Project from './project.js';
import TodoList from './todo-list';

export default class HtmlController {
    renderProject(projectsList) {
        const projectsListHtml = document.querySelector('.projects-list');

        projectsList.forEach(element => {
           
        console.log(projectsList)
        projectsListHtml.innerHTML += `
           <div class="project">${element.name}</div>
        `     
        });        
    };

    handleAddProjectButton() {        
        const buttonAddProject = document.querySelector('.button-add-project-popup');
        let inputValue = '';
        const projectsList = new TodoList;        

        buttonAddProject.addEventListener('click', () => {
            const input = document.querySelector('.input-add-project-popup');
            const project = new Project;

            inputValue = input.value;
            project.name = input.value;
            projectsList.clearProjects();         
            projectsList.addProject(project);             
            this.renderProject(projectsList.projects)
        });        
    };
    
    
}