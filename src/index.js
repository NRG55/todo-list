console.log('Hey');

import TodoList from './project-task-list.js';
import Project from './project.js';
import Task from './task.js';
import HtmlController from './webpage.js';
import ProjectTaskList from './project-task-list.js';

// let testTodo = new TodoList;
// console.log(testTodo)

// let testProjectTask = new Project('Test Project 2');
// // testProjectTask.setTask("Do the test")

// console.log(testProjectTask)

// const taskTest = new Task('terwe','2332','2323','dsf','fsf','fsf');
// console.log(taskTest)

// taskTest.name = "Dima"
// console.log(taskTest.name)
// // taskTest.name = ""
// console.log(taskTest.name)

// function setName() {

//     try {
//         taskTest.name = "Dima"
//         console.log(taskTest.name)
//         taskTest.name = ""
//         console.log(taskTest.name)
//     } catch (error) {
//         console.warn(error);

//     } finally {

//     }   
// }

// setName();
// console.log('Finished!');


const myProjectsList = new ProjectTaskList;
export default myProjectsList;

const html = new HtmlController;
html.loadWebpage();
//  html.loadProjects();


