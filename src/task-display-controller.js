import myProjectsList from "./index.js";
import { isToday, isPast } from 'date-fns';

export function taskPriorityHandler(task) {
    const taskPrioritySpan = document.createElement("span");
        // taskPrioritySpan.className = "priority-span"
        taskPrioritySpan.classList.add('material-symbols-outlined');
        // taskPrioritySpan.textContent = 'remove';
         
    // const prioritySpan = document.querySelector('.priority-span');
    // console.log(taskPrioritySpan)
    // if (task.priority == 'no priority') {
    //     taskPrioritySpan.classList.add('task-no-priority');
    //     taskPrioritySpan.textContent = 'stat_1';
    //   }
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
        const tasksNumber = myProjectsList.getTasksByProject(project).length;
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
        tasksNumber = myProjectsList.tasks.length;       
       };
      
      if (button.classList.contains("today-tasks-button")) {
        const todayTasksArray = myProjectsList.tasks.filter(element => {
          if(isToday(element.dueDate)) {            
            return element;
            };         
          });  
          tasksNumber = todayTasksArray.length;       
      };     

      if (button.classList.contains("overdue-tasks-button")) {     
        const overdueTasksArray = myProjectsList.tasks.filter(element => {
          if(isPast(element.dueDate) && !isToday(element.dueDate)) {            
            return element;
            };                  
          });           
          tasksNumber = overdueTasksArray.length; 
       };

       const taskNumberSpan = document.createElement('span');
       taskNumberSpan.className = "tasks-span";
       taskNumberSpan.innerHTML = tasksNumber; 
                
       button.appendChild(taskNumberSpan);    
    });        
};

export function updateNumberOfTasksHeader(project) {
    const taskContainerHeaderSpan = document.querySelector('.task-container-header-span');   
    
    if (project) {
      taskContainerHeaderSpan.innerHTML = `(${myProjectsList.getTasksByProject(project).length})`;
      return;
    };
    taskContainerHeaderSpan.innerHTML = `(${myProjectsList.tasks.length})`;       
} 

export function renderTodayTasks() {

}





