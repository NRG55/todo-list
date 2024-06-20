import TodoList, { todoList } from "./todo-list";
import Project from "./project";
import Task from "./task";
import { todoList as testTodoList } from "./todo-list";
import { createDefaultData } from "./defaultData";

export default class Storage {
    static Save() {        
        localStorage.setItem("todolist", todoList.toString());
    };

    static Load() { 
        // localStorage.removeItem("todolist"); 
        if (localStorage.getItem("todolist") === null) {            
            createDefaultData();
            Storage.Save();

            const todoListString = localStorage.getItem("todolist");
          
            todoList.fromString(todoListString) 
           
            return;      
        }       
        const todoListString = localStorage.getItem("todolist");
        // console.log(string) 
        todoList.fromString(todoListString) 
        console.log(todoList)      
    };    
};