import TodoList, { todoList } from "./todo-list";
import Project from "./project";
import Task from "./task";
import { todoList as testTodoList } from "./todo-list";
import { createDefaultData } from "./defaultData";

export default class Storage {
    static Save() { 
        createDefaultData();
        // localStorage.removeItem("todolist");
        localStorage.setItem("todolist", todoList.toString());
    };

    static Load() {         
        const todoListString = localStorage.getItem("todolist");
        // console.log(string) 
        todoList.fromString(todoListString) 
        console.log(todoList)      
    };    
};