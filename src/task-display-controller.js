import myProjectsList from "./index.js";
import { isToday } from 'date-fns';

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

      const taskNumberSpan = document.createElement('span');
      taskNumberSpan.className = "tasks-span"; 
      
      if (button.classList.contains("today-tasks-button")) {     
      const todayTasks = myProjectsList.tasks.filter(element => {
        if(isToday(element.dueDate)) {
          return element;
        };         
      });  

      taskNumberSpan.innerHTML = todayTasks.length;
          
        button.appendChild(taskNumberSpan);
      };

      if (button.classList.contains("all-tasks-button")) {     
      const tasksLength = myProjectsList.tasks.length;

      taskNumberSpan.innerHTML = tasksLength;  
      
      button.appendChild(taskNumberSpan);
    };

    
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





