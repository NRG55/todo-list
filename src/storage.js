import { todoList } from "./todo-list";
import Project from "./project";
import Task from "./task";

export default class Storage {
    setTodoList(value) {
        localStorage.setItem("todolist", JSON.stringify(value));
    };

    getTodoList() {
       

       
    }
}