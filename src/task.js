export default class Task {
    #id = "";
    #name = "";
    #description = "";
    #notes = "";
    #dueDate;
    #priority;
    #project;

    static FromObject(object) {
        return new Task(object.name, object.description,  object.notes, object.dueDate, object.priority, object.project, object.id);
    };

    constructor(name, description, notes, dueDate, priority, project, id) {
        this.#id = id;
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

    set id(value) {
        this.#id = value;
    };

    get id() {
        return this.#id;
    };

    toObject() {       
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            notes: this.#notes,
            dueDate: this.#dueDate,
            priority: this.#priority,
            project: this.#project
        };
    };    
};





