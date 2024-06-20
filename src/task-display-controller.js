import { todoList } from "./todo-list";
import { isToday, isPast } from 'date-fns';

export function taskPriorityHandler(task) {
    const taskPrioritySpan = document.createElement("span");
        
    taskPrioritySpan.classList.add('material-symbols-outlined');
       
      if (task.priority == 'low') {
        taskPrioritySpan.classList.add('task-priority-low');
        taskPrioritySpan.textContent = 'stat_1';
      }
      if (task.priority == 'medium') {
        taskPrioritySpan.classList.add('task-priority-medium');
        taskPrioritySpan.textContent = 'stat_2';
      }
      if (task.priority == 'high') {
        taskPrioritySpan.classList.add('task-priority-high');
        taskPrioritySpan.textContent = 'stat_3';
      }

      return taskPrioritySpan;
};

export function updateNumberOfTasks(project) {
    updateNumberOfTasksHeader(project);
    updateNumberOfTasksTasksButton();
    updateNumberOfTasksProjectButtons();
};

export function updateNumberOfTasksProjectButtons() {    
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

export function updateNumberOfTasksTasksButton() {
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

export function updateNumberOfTasksHeader(project) {
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
} 






