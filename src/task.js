export default class Task {
    #name = "";
    #description = "";
    #notes = "";
    #dueDate;
    #priority;
    #project;

    constructor(name, description, notes, dueDate, priority, project) {
        this.#name = name;
        this.#description = description;
        this.#notes = notes;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#project = project;
    };

    set name(value) {         
        if(value === "" || typeof value !== 'string') {
           throw new Error('Invalid task name!');
        }
        this.#name = value;
    };

    get name() {
        return this.#name;
    };

    set description(value) {
        this.#description = value;
    };

    get description() {
        return this.#description;
    };

    set notes(value) {
        this.#notes = value;
    };

    get notes() {
        return this.#notes;
    };

    set dueDate(value) {
        this.#dueDate = value;
    };

    get dueDate() {
        return this.#dueDate;
    };
 
    set priority(value) {
        this.#priority = value;
    };

    get priority() {
        return this.#priority;
    };

    set project(value) {
        this.#project = value;
    };

    get project() {
        return this.#project;
    };
};





