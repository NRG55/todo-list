import myProjectsList from "./index.js";

export function addProjectsToSelectOptgroup() {
        const projectOptionGroup = document.createElement('optgroup');
        projectOptionGroup.label = "Projects"
        console.log(projectOptionGroup)

        myProjectsList.projects.forEach((element) => {       
        const projectOption = document.createElement('option');

        projectOption.innerHTML = element.name;
        projectOptionGroup.appendChild(projectOption);        
        });

        return projectOptionGroup;
    };

    

