console.log('Hey');


import TodoList from './todo-list.js';
import Project from './project.js';
let testTodo = new TodoList;

console.log(testTodo)

let testProjectTask = new Project('Test Project 2');
testProjectTask.setTask("Do the test")

console.log(testProjectTask)
