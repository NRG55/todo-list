import myProjectsList from "./index.js";


export function addProjectsToSelectBox() {
        const projectOptionGroup = document.createElement('optgroup');
        projectOptionGroup.className = "task-form-projects-optgroup";
        projectOptionGroup.label = "Projects"
        // console.log(projectOptionGroup)

        myProjectsList.projects.forEach((element) => {       
        const projectOption = document.createElement('option');

        projectOption.innerHTML = element.name;
        projectOption.value = element.name;
        // console.log(projectOption)
        projectOptionGroup.appendChild(projectOption);        
        });

        return projectOptionGroup;
    };

export function selectCurrentProject() {
        const title = document.querySelector('.task-container-header-name');
        const projectsOptgroup = document.querySelectorAll('.task-form-projects-optgroup');
    //   console.log(projectsOptgroup)
        projectsOptgroup.forEach((optgroup) => {
            const projectOptions = optgroup.querySelectorAll('option');

            projectOptions.forEach((option) => {
                console.log(title.innerHTML)
                if (option.value === title.innerHTML) {
                    option.selected = true;
    
                    return;
                };         
            });         
        });
};

export function setTodayDate() {
    const dateInput = document.getElementById('duedate');
    console.log(dateInput)
    const today = new Date().toISOString().split('T')[0];

    dateInput.setAttribute('min', today);
    dateInput.setAttribute('value', today);
}

// export function handleDate(dueDate) { 
//     console.log(dueDate)
//     if (dueDate === "") {            
//         dueDate = "";            
//         return dueDate;            
//     } else {  
//         let date = format(dueDate, "dd MMM yy");
//         console.log(date)
//         return date;
//    };   
// };

    

