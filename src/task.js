export default class Task {
    #name = "";
    #description = "";
    #note = "";
    #dueDate;
    #priority;
    #location;

    constructor(name, description, note, dueDate, priority, location) {
        this.#name = name;
        this.#description = description;
        this.#note = note;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#location = location;
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

    set note(value) {
        this.#note = value;
    };

    get note() {
        return this.#note;
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

    set location(value) {
        this.#location = value;
    };

    get location() {
        return this.#location;
    };
};





