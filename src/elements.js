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
}