export default class Project {
    constructor(name) {
        this.name = name; 
        this.tasks = [];       
    };

    setTask(task) {
        this.tasks = task; 
    };
};



