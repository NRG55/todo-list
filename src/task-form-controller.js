import { todoList } from "./todo-list.js";

export function addProjectsToSelectBox() {
        const projectOptionGroup = document.createElement('optgroup');
        projectOptionGroup.className = "task-form-projects-optgroup";
        projectOptionGroup.label = "Projects";       

        todoList.projects.forEach((element) => {       
        const projectOption = document.createElement('option');

        projectOption.innerHTML = element.name;
        projectOption.value = element.name;       
        projectOptionGroup.appendChild(projectOption);        
        });

        return projectOptionGroup;
    };

export function selectCurrentProject() {
        const title = document.querySelector(".tasks-display-header-name");
        const projectsOptgroup = document.querySelectorAll('.task-form-projects-optgroup');
    
        projectsOptgroup.forEach((optgroup) => {
            const projectOptions = optgroup.querySelectorAll('option');

            projectOptions.forEach((option) => {               
                if (option.value === title.innerHTML) {
                    option.selected = true;
    
                    return;
                };         
            });         
        });
};

export function setTodayDate() {
    const dateInput = document.getElementById('duedate');  
    const today = new Date().toISOString().split('T')[0];

    dateInput.setAttribute('min', today);
    dateInput.setAttribute('value', today);
}

export function isTaskFormValid() {
    const taskNameInput = document.querySelector(".task-form-name-input").value;   

    if (taskNameInput === "") {      
        return false;
    };
    return true;
};


    

