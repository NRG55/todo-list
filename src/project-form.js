import myProjectsList from './index.js';

export default class ProjectForm {
    createProjectInputElement() {
        const projectInput = document.createElement('input');
       
        projectInput.type = 'text';
        projectInput.name = 'new-project';
        projectInput.placeholder = 'Project name';
        projectInput.focus();
    };

    submitProject() {
        const projectName = document.querySelector('new-project').value;

        myProjectsList.addProject(projectName);
    };

    
};