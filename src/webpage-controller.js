import Project from './project.js';
import myProjectsList from './index.js';
import RenderElement from './elements.js';
import moment from 'moment';

export default class WebpageController {
    renderHomepage() {
        // this.renderAllTasksElement();
        // this.renderProjects();
        // this.initAddProjectButton();
        // this.initAllTasksButton();
        // this.initProjectButton(); 
        this.initLeftSidebar();  
        // this.renderProjectButtons();
        this.initTasksContainer(); 
        // this.renderTasks();   
    };

    renderProjectButtons() {
        const addProjectContainer = document.querySelector('.left-sidebar-projects-container');
        const renderElement = new RenderElement;
        const projects = myProjectsList.projects;

        projects.forEach((element) => {
            const button = renderElement.leftSidebarProjectButton(element.name);           

            button.addEventListener('click', () => {
                this.renderTasksContainer(element.name)
                console.log('click')
            });
            addProjectContainer.appendChild(button);
        });      
    };

    

    // renderProjects() {        
    //     const projectsList = document.querySelector('ul.projects-list-left-sidebar');

    //     projectsList.innerHTML = ''; 
    //     myProjectsList.projects.forEach((element) => {                  
    //         projectsList.appendChild(this.renderProjectElement(element.name));           
    //     });
    // }; 
    
//     renderAllTasksElement() {
//         const allTasksDiv = document.querySelector('ul.all-tasks-left-sidebar');
//         const allTasksElement = document.createElement('button');
// ;
//         allTasksElement.innerHTML = "All tasks";
//         allTasksElement.id = "all-tasks-button";

//         //  console.log(myProjectsList)
//         allTasksDiv.appendChild(allTasksElement);
//     }

    // renderProjectElement(projectName) {
    //     const renderElement = new RenderElement;

        
    //     const projectWrap = document.createElement('li');
    //     // const projectElement = document.createElement('button');

    //     // projectElement.textContent = projectName; 
    //     // projectElement.id =  projectName;          
    //     projectWrap.appendChild(renderElement.leftSidebarProjectButton(projectName));
    //     return projectWrap;       
    // };

    renderTasksContainer(name) {
        const projectContent = document.querySelector('.tasks-container');

        projectContent.innerHTML = `
           <h2>${name}</h2>
           
        `        
    };   

    // initAddProjectButton() {        
    //     const buttonAddProject = document.querySelector('.add-project-button');       
      
    //     buttonAddProject.addEventListener('click', () => {
    //         const projectForm = new ProjectForm;
    //         projectForm.createForm();          
    //         this.renderProjects()
    //         this.initProjectButton()
    //         this.initSubmitProjectFormButton(projectForm);           
    //     });
    // };

    // initSubmitProjectFormButton(projectForm) {
    //     const buttonAddProject = document.getElementById('submit-project-form-button');  
        
    //     buttonAddProject.addEventListener('click', () => {    
    //         projectForm.submitProject();
    //         projectForm.removeFormFromDOM();
    //         this.renderProjects();
    //         this.initProjectButton();           
    //     });
    // };

    // initProjectButton() { 
    //     let projectName = ''; 

    //     myProjectsList.projects.forEach((e) => {
    //         projectName = e.name; 

    //         const buttonProject = document.getElementById(`${projectName}`);
    //         buttonProject.addEventListener('click',()  => {              
    //             this.renderTasksContainer(e.name);               
    //             this.initAddTaskButton();  
    //         });                    
    //     });           
    // };

    // initAllTasksButton() {            
    //     const buttonProject = document.getElementById('all-tasks-button');

    //     buttonProject.addEventListener('click',()  => {              
    //         this.renderTasksContainer('All tasks');               
    //         this.initAddTaskButton();  
    //     });              
    // }

    // initAddTaskButton() {        
    //     const buttonAddTask = document.querySelector('.button-add-task');       
       
    //     buttonAddTask.addEventListener('click', () => {
    //         const dialog = document.querySelector('dialog');
    //         dialog.show();

    //         const taskForm = new TaskForm;          
    //         taskForm.renderTaskForm();
    //         taskForm.addProjectsToSelectBox(taskForm);
    //         this.initSubmitTaskFormButton(taskForm);           
    //     });
    // };
    
    // initSubmitTaskFormButton(taskForm) {
    //     const buttonAddProject = document.getElementById('task-form-submit-button'); 

    //     buttonAddProject.onclick = () => {
    //         taskForm.submitTask();
    //         taskForm.closeTaskForm();
    //     }

    //     // buttonAddProject.addEventListener('click', () => { 
    //     //     // const taskForm = new TaskForm;   
    //     //     taskForm.submitTask();
           
            
    //     //     // this.renderProjects();
    //     //     // this.initProjectButton();
    //     // });
       
    // };

    initLeftSidebar() {
        const addProjectButton = document.querySelector('.add-project-button');      
      
        addProjectButton.addEventListener('click', () => {
            // console.log('HEY')
            this.openAddProjectForm();                      
        });

        this.renderProjectButtons();
    };

    openAddProjectForm() {
        // const dialog = document.getElementById('left-sidebar-projects-dialog');
        const projectsContainer = document.querySelector('.left-sidebar-projects-container');
        const projectFormContainer = document.querySelector('.left-sidebar-project-form');
        const renderElement = new RenderElement;
        const form = renderElement.projectForm();
        // dialog.textContent = "";
        // dialog.appendChild(form);       
        projectFormContainer.appendChild(form);

        const projectForm = document.getElementById('project-form');       
        projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            myProjectsList.addProject(projectName.value);          
            console.log(myProjectsList)
            projectsContainer.innerHTML = "";
            projectFormContainer.innerHTML = "";
            // projectForm.textContent = "";
            this.renderProjectButtons();
            // projectForm.style.display = "none";           
            // dialog.close();
        })
        // dialog.showModal();
        // projectForm.style.display = "block"
    };
    
    initTasksContainer() {
        const addTask = document.getElementById('add-task-button');

        this.renderTasks();
        addTask.addEventListener("click", () => {
            console.log('click')
            this.renderAddTaskForm();
        });
    };

    renderAddTaskForm() {
        const dialog = document.querySelector('.task-form-dialog');

        const renderElement = new RenderElement;
        const form = renderElement.taskForm();
        dialog.textContent = "";
        dialog.appendChild(form);

        const taskForm = document.getElementById('task-form');
        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();            
           
            myProjectsList.addTask(title.value, description.value, notes.value, duedate.value, priority.value, selectProject.value);
            console.log(myProjectsList);
            this.renderTasks();
            dialog.close();
        })

        dialog.showModal();
    };

    renderTasks() {
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.innerHTML = "";
        const renderElement = new RenderElement;
        console.log(myProjectsList.allTasks)

        myProjectsList.allTasks.forEach((element) => {
            const task = renderElement.task(element);
            console.log(task)
            tasksContainer.appendChild(task);
        });
    };
};

