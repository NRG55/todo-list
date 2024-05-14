export default class RenderElement {
    leftSidebarProjectButton(project) {
        const projectButton = document.createElement("button");
        projectButton.classList.add("left-sidebar-project-button");
        projectButton.setAttribute("data-key", project);
        projectButton.id = project

        const image = document.createElement("img");
        image.src = '';        

        const text = document.createElement("div");
        text.textContent = project;

        const deleteProjectButtonText = document.createElement("span");        
        deleteProjectButtonText.textContent = "x"

        projectButton.appendChild(image);
        projectButton.appendChild(text);
        projectButton.appendChild(deleteProjectButtonText);

        return projectButton;
    }; 
    
    addProjectForm() {
        const addProjectForm = document.createElement('form');
        addProjectForm.setAttribute("id", "add-project-form");        

        const projectInput = document.createElement('input');
        projectInput.type = 'text';     
        projectInput.id = 'projectName';
        projectInput.className = 'input-new-project';
        projectInput.placeholder = 'Project name';
        projectInput.focus();

        const buttonsContainer = document.createElement('div');

        const addButton = document.createElement('button');
        addButton.textContent = 'Add'; 
        addButton.setAttribute('type', 'submit')
        addButton.id ='project-form-add-button';
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel'; 
       
        buttonsContainer.appendChild(addButton);
        buttonsContainer.appendChild(cancelButton);
        addProjectForm.append(projectInput);
        addProjectForm.append(buttonsContainer);

        return addProjectForm;
    };
}