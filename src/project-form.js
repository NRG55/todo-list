import myProjectsList from './index.js';
import Project from './project.js';

export default class ProjectForm {
    createForm() {
        const projectContainer = document.querySelector('.add-project-container');
        const buttonsContainer = document.createElement('div');

        const projectInput = document.createElement('input');
        projectInput.type = 'text';
        projectInput.name = 'input-new-project';
        projectInput.className = 'input-new-project';
        projectInput.placeholder = 'Project name';
        projectInput.focus();

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit'; 
        submitButton.id ='submit-project-form-button';
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel'; 
       
        buttonsContainer.appendChild(submitButton);
        buttonsContainer.appendChild(cancelButton);
        projectContainer.append(projectInput);
        projectContainer.append(buttonsContainer);
    };

    removeFormFromDOM() {
        const projectContainer = document.querySelector('.add-project-container');

        projectContainer.innerHTML = "";
    }

    submitProject() {
        const inputValue = document.querySelector('.input-new-project').value;

        myProjectsList.addProject(new Project(inputValue));
    };
};