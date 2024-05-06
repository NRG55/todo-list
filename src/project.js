export default class Project {
    #name = '';
    #tasks;
    
    constructor(name) {
        this.#name = name; 
        this.#tasks = [];       
    };

    set name(value) {
        this.#name = value;
    };

    get name() {
        return this.name;
    };

    setTasks(tasks) {
        this.#tasks = tasks; 
    };

    getTasks() {
        return this.#tasks;
    };

    addTask(value) {
        this.#tasks.push(value);
    };
};



