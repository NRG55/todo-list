import myProjectsList from './index.js';

export default class ProjectForm {
    createForm() {
        const projectContainer = document.querySelector('.add-project-container');
        const buttonsContainer = document.createElement('div');

        const projectInput = document.createElement('input');
        projectInput.type = 'text';
        projectInput.name = 'new-project';
        projectInput.placeholder = 'Project name';
        projectInput.focus();

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit'; 
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel'; 
       
        buttonsContainer.appendChild(submitButton);
        buttonsContainer.appendChild(cancelButton);
        projectContainer.append(projectInput);
        projectContainer.append(buttonsContainer);

    };

    submitProject() {
        const projectName = document.querySelector('.new-project').value;


        myProjectsList.addProject(projectName);
    };


};