class Task {
    constructor(title, description, note, dueDate, priority, location) {
        this.title = title;
        this.description = description;
        this.note = note;
        this.dueDate = dueDate;
        this.priority = priority;
        this.location = location;
    };
};

const tasks = [];

function addTask(title, description, note, dueDate, priority, location) {
        const task = new Task(title, description, note, dueDate, priority, location);

        return tasks.push(task);
}

