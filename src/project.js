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
        return this.#name;
    };

    set tasks(tasks) {
        this.#tasks = tasks; 
    };

    get tasks() {
        return this.#tasks;
    };

    addTask(value) {
        this.#tasks.push(value);
    };
};



