
import './style.css';
import RenderElement from './elements.js';
import WebpageController from './ui.js';
// import TodoList from './todo-list.js';

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


// const todoList = new TodoList();
// // myProjectsList.projects.forEach(e => {
// //     console.log(e.name)
// // })


// export default todoList;

const webpageController = new WebpageController;
webpageController.renderHomepage();

// const renderElement = new RenderElement;
// console.log(renderElement)

// myProjectsList.tasks.filter(element => {

//     if (isToday(element.dueDate)) {
//         return console.log(element.dueDate)
//     }
   

//     })



//  html.loadProjects();


// webpage.initDisplayProjectContentButton()