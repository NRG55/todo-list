import { todoList } from './todo-list.js';
import { isToday, isPast } from 'date-fns';
import { renderElement } from './elements.js';
import Storage from './storage.js';


export default class Ui {
    // Props drilling is an anti-pattern. I should avoid it.
    render(title) {
        Storage.Load();
        this.renderWebpage(title);                        
    };

    renderWebpage(title) {
        renderElement.headerAndMain();
        this.renderMainContent(title);
    };

    renderMainContent(title) {
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = "";         
        
        this.renderSidebar(mainContent);         
        this.renderTasksContainer(mainContent, title);        
    };

    // -------------SIDEBAR-------------

    renderSidebar(mainContent) { 
        mainContent.appendChild(renderElement.sidebar());        
        this.renderSidebarTasksButtons();        
        this.renderSidebarProjectsButtons();        

        const addProjectButton = document.querySelector(".sidebar-add-project-button");       
      
        addProjectButton.addEventListener('click', () => {          
            this.renderAddProjectForm();                      
        });

        this.renderResetDemoButton();
    };

    renderSidebarTasksButtons() {
        const sidebarTasksContainer = document.querySelector('.sidebar-tasks'); 

        sidebarTasksContainer.appendChild(renderElement.sidebarTasksButtons()); 
        this.updateNumberOfTasksTasksButton(); 
        this.addEventListenerToTasksButtons();
    };

    addEventListenerToTasksButtons() {
        const allTasksButton = document.querySelector('.all-tasks-button');
        const todayTasksButton = document.querySelector('.today-tasks-button');
        const overdueTasksButton = document.querySelector('.overdue-tasks-button');
               
        allTasksButton.addEventListener('click', () => { 
                  
            this.renderTasksContainerHeader("All Tasks");
            this.renderTasks("All Tasks");                       
        });

        todayTasksButton.addEventListener('click', () => {            
            this.renderTasksContainerHeader("Today");           
            this.renderTasks("Today");              
        });

        overdueTasksButton.addEventListener('click', () => {            
            this.renderTasksContainerHeader("Overdue");
            this.renderTasks("Overdue");          
        });
    }; 
    
    updateNumberOfTasksTasksButton() {
        const tasksButtons = document.querySelectorAll(".left-sidebar-tasks-button");
      
        tasksButtons.forEach((button) => { 
            if (button.contains(button.querySelector('.tasks-span'))) {
              button.querySelector('.tasks-span').remove();
            };     
        
          let tasksNumber;  
              
          if (button.classList.contains("all-tasks-button")) {     
            tasksNumber = todoList.tasks.length;       
          };
          
          if (button.classList.contains("today-tasks-button")) {
            const todayTasksArray = todoList.tasks.filter(element => {
              if(isToday(element.dueDate)) {            
                return element;
                };         
              });  
              tasksNumber = todayTasksArray.length;       
          };     
      
          if (button.classList.contains("overdue-tasks-button")) {     
            const overdueTasksArray = todoList.tasks.filter(element => {
              if(isPast(element.dueDate) && !isToday(element.dueDate)) {            
                return element;
                };                  
              });           
              tasksNumber = overdueTasksArray.length; 
          };
      
          const taskNumberSpan = document.createElement("span");
          taskNumberSpan.className = "tasks-span";
          taskNumberSpan.innerHTML = tasksNumber; 
      
          button.appendChild(taskNumberSpan);
        });     
    };      

    renderSidebarProjectsButtons() {
        const projectsButtonsContainer = document.querySelector('.sidebar-projects-buttons-container');
        projectsButtonsContainer.innerHTML = "";        
       
        const projects = todoList.projects;

        projects.forEach((element, index) => {           
            const button = renderElement.sidebarProjectButton(element.name, index); 

            button.onclick = (e)=> {
                    const projectName = button.id;
                   
                     if (e.target.classList.contains("project-popup-edit-button") || e.target.classList.contains("project-rename-ok-button")) { button.classList.remove("left-sidebar-project-button");                      
                        return;
                     } else {                
                        this.renderTasksContainerHeader(projectName)
                        this.renderTasks(projectName);                  
                     }};               

            projectsButtonsContainer.appendChild(button);            
        }); 
        ui.updateNumberOfTasksProjectButtons();       
    };

    updateNumberOfTasksProjectButtons() {    
        const projectButtons = document.querySelectorAll('.left-sidebar-project-button');
    
        projectButtons.forEach((button) => {       
            const project = button.id;           
            const tasksNumber = todoList.getTasksByProject(project).length;
            const taskNumberSpan = document.createElement('span');
            taskNumberSpan.className = "tasks-span";
    
            if (button.contains(button.querySelector('.tasks-span'))) {
                button.querySelector('.tasks-span').remove();
            };
           
            taskNumberSpan.innerHTML = tasksNumber;       
            button.appendChild(taskNumberSpan);
        });
    };

    renderAddProjectForm() { 
        const projectFormContainer = document.querySelector(".sidebar-project-form-container");
        const addProjectButton = document.querySelector(".sidebar-add-project-button");
   
        const form = renderElement.projectForm();

        projectFormContainer.appendChild(form);

        const projectForm = document.getElementById('project-form');
        const projectNameInput = document.getElementById('projectName');
        const cancelButton = document.getElementById('project-form-cancel-button');  

        projectNameInput.focus();
        addProjectButton.style.display = 'none';
       
        projectNameInput.addEventListener('invalid', (e) => {
            e.preventDefault(); 
            
            projectNameInput.classList.add('error');
            projectNameInput.focus();
          }, false);
       
        projectForm.addEventListener("submit", (event) => {
            event.preventDefault(); 
           
            if(todoList.isProjectExists(projectName.value)) {
                const warning = document.querySelector('.project-warning');

                warning.innerHTML = "Project already exists";
                projectNameInput.classList.add('error');
                projectNameInput.focus();
                return;
            };            
            
            const project = projectName.value;  
            todoList.addProject(project);
            Storage.Save();                     
            this.render(project);           
         
            addProjectButton.style.display = 'block';                               
        }); 
        
        cancelButton.addEventListener('click', () => {
            projectFormContainer.innerHTML = "";
            addProjectButton.style.display = 'block';     
        });
    }; 
    
    renderResetDemoButton() {
        const sidebar = document.querySelector(".sidebar");

        sidebar.appendChild(renderElement.resetDemoButton());
        
        const resetButton = document.querySelector(".reset-demo-button");

        resetButton.onclick = () => {
            Storage.ClearAll();
            todoList.clearAll();
            this.render();
        };
    };
    
     // -------------TASKS-CONTAINER-------------
    
    renderTasksContainer(mainContent, title) {
        mainContent.appendChild(renderElement.tasksContainer()); 
        this.renderTasksContainerHeader(title);
        this.renderTasks(title);
              
    };   

    renderTasksContainerHeader(title) { 
        const headerTitle = document.querySelector(".tasks-display-header-name");           
        
        if (!title) {
            headerTitle.innerHTML = "All Tasks";
            this.updateNumberOfTasksHeader();  
        } else {                    
            headerTitle.textContent = title;           
            this.updateNumberOfTasksHeader(title); 
            }; 

        const addTask = document.querySelector('.add-task-button');         

        addTask.addEventListener("click", () => {           
            this.renderAddTaskForm();          
        });
    };

    updateNumberOfTasksHeader(project) {
        const headerName = document.querySelector(".tasks-display-header-name").innerHTML;
        const taskContainerHeaderSpan = document.querySelector(".task-container-header-span");   
        
        let tasksNumber;  
        
        if (headerName === "All Tasks") {        
          tasksNumber = todoList.tasks.length;      
          taskContainerHeaderSpan.innerHTML = `(${tasksNumber})`;       
          return;   
         };
        
        if (headerName === "Today") {
          const todayTasksArray = todoList.tasks.filter(element => {
            if(isToday(element.dueDate)) {                      
              return element;
              };                   
            });   
           
            tasksNumber = todayTasksArray.length;    
            taskContainerHeaderSpan.innerHTML = `(${tasksNumber})`; 
            return;          
        };     
      
        if (headerName === "Overdue") {     
          const overdueTasksArray = todoList.tasks.filter(element => {
            if(isPast(element.dueDate) && !isToday(element.dueDate)) {            
              return element;
              };                  
            }); 
    
            tasksNumber = overdueTasksArray.length; 
            taskContainerHeaderSpan.innerHTML = `(${tasksNumber})`; 
            return;
        };   
        
        taskContainerHeaderSpan.innerHTML = `(${todoList.getTasksByProject(project).length})`;     
    };    

    renderTasks(title) {
        const tasksDisplay = document.querySelector(".tasks-display");      

        tasksDisplay.innerHTML = "";
      
        if (title === "All Tasks" || title === undefined) {
            todoList.tasks.forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksDisplay.appendChild(task);                       
            });
            
            this.removeLinkedProject();  
            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 

            return;           
        };
       
        if (title === "Today") {
            todoList.getTodayTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
               
                tasksDisplay.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 

            return;           
        };

        if (title === "Overdue") {            
            todoList.getOverdueTasks().forEach((element) => {
                const task = renderElement.taskContent(element);
             
                tasksDisplay.appendChild(task);          
            });

            this.addEventListenerToTaskDeletButton(title);
            this.addEventListenerToTaskEditButton(); 
          
            return;           
        };       
        
        let tasks = todoList.getTasksByProject(title);

        tasks.forEach((element) => {
            const task = renderElement.taskContent(element);
            
            tasksDisplay.appendChild(task);           
        });

        this.addEventListenerToTaskDeletButton(title);
        this.addEventListenerToTaskEditButton(); 
        this.removeLinkedProject();  
    };

    taskPriorityHandler(task) {
        const taskPrioritySpan = document.createElement("span");
            
        taskPrioritySpan.classList.add('material-symbols-outlined');
           
          if (task.priority == 'low') {
            taskPrioritySpan.classList.add('task-priority-low');
            taskPrioritySpan.textContent = 'stat_1';
          };
          if (task.priority == 'medium') {
            taskPrioritySpan.classList.add('task-priority-medium');
            taskPrioritySpan.textContent = 'stat_2';
          };
          if (task.priority == 'high') {
            taskPrioritySpan.classList.add('task-priority-high');
            taskPrioritySpan.textContent = 'stat_3';
          };
    
          return taskPrioritySpan;
    };
    
    removeLinkedProject() {
        const headerProjectName = document.querySelector(".tasks-display-header-name").innerHTML;
        const linkedProjectContainers = document.querySelectorAll(".linked-project-container");
          
       
        linkedProjectContainers.forEach((element) => { 
            const linkedProject = element.querySelector(".linked-project");                 

            if (headerProjectName === linkedProject.innerHTML) {                
               element.remove();
            };
        });
    };

    addEventListenerToTaskDeletButton(title) {
        const deleteTaskButtons = document.querySelectorAll(".task-delete-button");

        deleteTaskButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskId = e.target.id;               

                todoList.removeTask(taskId);
                Storage.Save();            
                this.render(title);     
                this.renderTasks(title);           
            });
        });       
    };

    addEventListenerToTaskEditButton() {
        const editTaskButtons = document.querySelectorAll(".task-edit-button");        

        editTaskButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const taskId = e.target.id.slice(17, 30);
                const task = todoList.getTaskById(taskId);               
               
                this.renderAddTaskForm(task);          
            });
        });       
    };

    // ------------TASK-FORM-------------

    renderAddTaskForm(taskToEdit) {
        const dialog = document.querySelector('.task-form-dialog');   
        const form = renderElement.taskForm(taskToEdit);

        dialog.textContent = "";
        dialog.appendChild(form);    
       
        this.setTodayDate();
        this.addProjectsToSelectBox();
        this.selectCurrentProject();

        const taskForm = document.getElementById('task-form');       
        const closeButton = document.querySelector(".task-form-close-button");
        

        taskForm.addEventListener('submit', (event) => {
            event.preventDefault();             
            
            if (!this.isTaskFormValid()) {
                this.renderAddTaskForm(taskToEdit);
                const taskNameInput = document.querySelector(".task-form-name-input");                      
                   
                taskNameInput.classList.add('error');
                taskNameInput.value = "";
                taskNameInput.focus();
                
                return;
            };
            
            if (taskToEdit) {               
               todoList.updateTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value, taskToEdit.id);
               Storage.Save();
            } else {               
                todoList.addTask(title.value, description.value, "notes.value", duedate.value, priority.value, selectProject.value); 
                Storage.Save();
                };
                
            this.render(selectProject.value);                   

            dialog.close();                     
            });              
        
        closeButton.addEventListener('click', (e) => {
            e.preventDefault(); 
               dialog.close();              
        });
        
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
               
                dialog.close();
            };
        });

        dialog.showModal();
    };

   addProjectsToSelectBox() {
        const projectSelectBox = document.getElementById("selectProject");
        const projectOptionGroup = document.createElement('optgroup');

        projectOptionGroup.className = "task-form-projects-optgroup";
        projectOptionGroup.label = "Projects";       

        todoList.projects.forEach((element) => {       
        const projectOption = document.createElement('option');

        projectOption.innerHTML = element.name;
        projectOption.value = element.name;       
        projectOptionGroup.appendChild(projectOption);        
        });

        projectSelectBox.appendChild(projectOptionGroup)

        return projectSelectBox;
    };

    selectCurrentProject() {
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

    setTodayDate() {
        const dateInput = document.getElementById('duedate');  
        const today = new Date().toISOString().split('T')[0];

        dateInput.setAttribute('min', today);
        dateInput.setAttribute('value', today);
    }

    isTaskFormValid() {
        const taskNameInput = document.querySelector(".task-form-name-input").value;   

        if (taskNameInput === "") {      
            return false;
        };
        return true;
    };   
   
};

export const ui = new Ui();

