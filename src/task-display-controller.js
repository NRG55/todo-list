import myProjectsList from ".";

export function taskPriorityHandler(task) {
    const taskPrioritySpan = document.createElement("span");
        // taskPrioritySpan.className = "priority-span"
        taskPrioritySpan.classList.add('material-symbols-outlined');
        taskPrioritySpan.textContent = 'remove';
    // const prioritySpan = document.querySelector('.priority-span');
    console.log(taskPrioritySpan)
    if (task.priority == 'no priority') {
        taskPrioritySpan.classList.add('task-no-priority');
      }
      if (task.priority == 'low') {
        taskPrioritySpan.classList.add('task-priority-low');
      }
      if (task.priority == 'medium') {
        taskPrioritySpan.classList.add('task-priority-medium');
      }
      if (task.priority == 'high') {
        taskPrioritySpan.classList.add('task-priority-high');
      }

      return taskPrioritySpan;
};

export function updateNumberOfTasks(project) {
    renderNumberOfTasksHeaderTaskContainer(project);
    renderNumberOfTasksProjectButton();
};

export function renderNumberOfTasksProjectButton() {    
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

export function renderNumberOfTasksHeaderTaskContainer(project) {
    const taskContainerHeaderSpan = document.querySelector('.task-container-header-span');   

    taskContainerHeaderSpan.innerHTML = `(${myProjectsList.getTasksByProject(project).length})`;    
} 






