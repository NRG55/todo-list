export default class Project {
    #name = '';
    #tasks;

    static FromObject(object) {
        return new Project(object.name);
    };

    constructor(name) {
        this.#name = name;
        this.#tasks = [];
    };

    set name(value) {
        try {
            if (value === "" || typeof value !== 'string') {
                throw new Error('Invalid project name!'); // TODO: Learn more about error handling
            }
        } catch (error) {
            console.warn(error);
        }
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

    toObject() {
        return {
            name: this.#name
        }
    }
};



