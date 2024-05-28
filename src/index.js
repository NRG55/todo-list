// console.log('Hey');
import './style.css'
import TodoList from './todo-list-controller.js';
import Project from './project.js';
import Task from './task.js';
import RenderElement from './elements.js';
import WebpageController from './webpage-controller.js';
import ProjectTaskList from './todo-list-controller.js';

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
// myProjectsList.projects.forEach(e => {
//     console.log(e.name)
// })


export default myProjectsList;

const webpageController = new WebpageController;
webpageController.renderHomepage();

const renderElement = new RenderElement;
// console.log(renderElement)





//  html.loadProjects();


// webpage.initDisplayProjectContentButton()