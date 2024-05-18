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

export function updateHeader(title) {
    const header = document.querySelector('.task-container-header-name');
    header.innerHTML = title;
};


