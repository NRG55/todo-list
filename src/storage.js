import { todoList } from "./todo-list";
import { createDefaultData } from "./defaultData";

export default class Storage {
    static Save() {        
        localStorage.setItem("todolist", todoList.toString());
    };

    static Load() {        
        if (localStorage.getItem("todolist") === null) {            
            createDefaultData();
            Storage.Save();

            const todoListString = localStorage.getItem("todolist");
          
            todoList.fromString(todoListString) 
           
            return;      
        }; 

        const todoListString = localStorage.getItem("todolist");       
        todoList.fromString(todoListString);            
    }; 
    
    static ClearAll() {
        localStorage.removeItem("todolist"); 
    };
};