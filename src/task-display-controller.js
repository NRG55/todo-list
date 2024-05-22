import myProjectsList from ".";

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
    displayNumberOfTasksHeaderTaskContainer(project);
    appendNumberOfTasksToAllTasksButton();
    appendNumberOfTasksToProjectButton();
};

export function appendNumberOfTasksToProjectButton() {    
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

export function appendNumberOfTasksToAllTasksButton() {    
        const allTasksButton = document.querySelector('.all-tasks-button');       
        const taskNumberSpan = document.createElement('span');
        taskNumberSpan.className = "tasks-span";

        if (allTasksButton.contains(allTasksButton.querySelector('.tasks-span'))) {
           allTasksButton.querySelector('.tasks-span').remove();
        };
        
        const tasksNumber = myProjectsList.allTasks.length;
        taskNumberSpan.innerHTML = tasksNumber;       
        allTasksButton.appendChild(taskNumberSpan);   
};

export function displayNumberOfTasksHeaderTaskContainer(project) {
    const taskContainerHeaderSpan = document.querySelector('.task-container-header-span');   
    
    if (project) {
      taskContainerHeaderSpan.innerHTML = `(${myProjectsList.getTasksByProject(project).length})`;
      return;
    };
    taskContainerHeaderSpan.innerHTML = `(${myProjectsList.allTasks.length})`;       
} 

export function renderAllTasks() {

}





