import myProjectsList from ".";
import Task from "./task";

export default class Project {
    #name = '';
    #tasks;

    constructor(name) {
        this.#name = name; 
        this.#tasks = [];       
    };

    set name(value) {
        try {
        if(value === "" || typeof value !== 'string') {
            throw new Error('Invalid project name!');
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
};



