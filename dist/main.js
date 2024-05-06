/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    #name = '';
    #tasks;

    constructor(name) {
        this.#name = name; 
        this.#tasks = [];       
    };

    set name(value) {
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

    addTask(value) {
        this.#tasks.push(value);
    };
};





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    #name = "";
    #description = "";
    #note = "";
    #dueDate;
    #priority;
    #location;

    constructor(name, description, note, dueDate, priority, location) {
        this.#name = name;
        this.#description = description;
        this.#note = note;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#location = location;
    };

    set name(value) {         
        if(value === "" || typeof value !== 'string') {
           throw new Error('Invalid name!');
        }
        this.#name = value;
    };

    get name() {
        return this.#name;
    };

    set description(value) {
        this.#description = value;
    };

    get description() {
        return this.#description;
    };

    set note(value) {
        this.#note = value;
    };

    get note() {
        return this.#note;
    };

    set dueDate(value) {
        this.#dueDate = value;
    };

    get dueDate() {
        return this.#dueDate;
    };
 
    set priority(value) {
        this.#priority = value;
    };

    get priority() {
        return this.#priority;
    };

    set location(value) {
        this.#location = value;
    };

    get location() {
        return this.#location;
    };
};







/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Test Project'));
    };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list.js */ "./src/todo-list.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
console.log('Hey');





let testTodo = new _todo_list_js__WEBPACK_IMPORTED_MODULE_0__["default"];

console.log(testTodo)

let testProjectTask = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Test Project 2');
// testProjectTask.setTask("Do the test")

console.log(testProjectTask)

const taskTest = new _task_js__WEBPACK_IMPORTED_MODULE_2__["default"]('terwe','2332','2323','dsf','fsf','fsf');
console.log(taskTest)

taskTest.name = "Dima"
console.log(taskTest.name)
// taskTest.name = ""
console.log(taskTest.name)

function setName() {

    try {
        taskTest.name = "Dima"
        console.log(taskTest.name)
        taskTest.name = ""
        console.log(taskTest.name)
    } catch (error) {
        console.warn(error);

    } finally {
        
    }

   
}
setName();
console.log('Finished!');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVtQztBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0QztBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7O0FBR3NDO0FBQ0g7QUFDTjtBQUM3QixtQkFBbUIscURBQVE7O0FBRTNCOztBQUVBLDBCQUEwQixtREFBTztBQUNqQzs7QUFFQTs7QUFFQSxxQkFBcUIsZ0RBQUk7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgICNuYW1lID0gJyc7XG4gICAgI3Rhc2tzO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLiNuYW1lID0gbmFtZTsgXG4gICAgICAgIHRoaXMuI3Rhc2tzID0gW107ICAgICAgIFxuICAgIH07XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNuYW1lID0gdmFsdWU7XG4gICAgfTtcblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgICB9O1xuXG4gICAgc2V0IHRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMuI3Rhc2tzID0gdGFza3M7IFxuICAgIH07XG5cbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0YXNrcztcbiAgICB9O1xuXG4gICAgYWRkVGFzayh2YWx1ZSkge1xuICAgICAgICB0aGlzLiN0YXNrcy5wdXNoKHZhbHVlKTtcbiAgICB9O1xufTtcblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgICNuYW1lID0gXCJcIjtcbiAgICAjZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICNub3RlID0gXCJcIjtcbiAgICAjZHVlRGF0ZTtcbiAgICAjcHJpb3JpdHk7XG4gICAgI2xvY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIG5vdGUsIGR1ZURhdGUsIHByaW9yaXR5LCBsb2NhdGlvbikge1xuICAgICAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy4jbm90ZSA9IG5vdGU7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLiNsb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH07XG5cbiAgICBzZXQgbmFtZSh2YWx1ZSkgeyAgICAgICAgIFxuICAgICAgICBpZih2YWx1ZSA9PT0gXCJcIiB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBuYW1lIScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI25hbWUgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICAgIH07XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHNldCBub3RlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuI25vdGUgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgZ2V0IG5vdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNub3RlO1xuICAgIH07XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gdmFsdWU7XG4gICAgfTtcblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9O1xuIFxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgICB9O1xuXG4gICAgc2V0IGxvY2F0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuI2xvY2F0aW9uID0gdmFsdWU7XG4gICAgfTtcblxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xvY2F0aW9uO1xuICAgIH07XG59O1xuXG5cblxuXG5cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUZXN0IFByb2plY3QnKSk7XG4gICAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdIZXknKTtcblxuXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi90b2RvLWxpc3QuanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5sZXQgdGVzdFRvZG8gPSBuZXcgVG9kb0xpc3Q7XG5cbmNvbnNvbGUubG9nKHRlc3RUb2RvKVxuXG5sZXQgdGVzdFByb2plY3RUYXNrID0gbmV3IFByb2plY3QoJ1Rlc3QgUHJvamVjdCAyJyk7XG4vLyB0ZXN0UHJvamVjdFRhc2suc2V0VGFzayhcIkRvIHRoZSB0ZXN0XCIpXG5cbmNvbnNvbGUubG9nKHRlc3RQcm9qZWN0VGFzaylcblxuY29uc3QgdGFza1Rlc3QgPSBuZXcgVGFzaygndGVyd2UnLCcyMzMyJywnMjMyMycsJ2RzZicsJ2ZzZicsJ2ZzZicpO1xuY29uc29sZS5sb2codGFza1Rlc3QpXG5cbnRhc2tUZXN0Lm5hbWUgPSBcIkRpbWFcIlxuY29uc29sZS5sb2codGFza1Rlc3QubmFtZSlcbi8vIHRhc2tUZXN0Lm5hbWUgPSBcIlwiXG5jb25zb2xlLmxvZyh0YXNrVGVzdC5uYW1lKVxuXG5mdW5jdGlvbiBzZXROYW1lKCkge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgdGFza1Rlc3QubmFtZSA9IFwiRGltYVwiXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tUZXN0Lm5hbWUpXG4gICAgICAgIHRhc2tUZXN0Lm5hbWUgPSBcIlwiXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tUZXN0Lm5hbWUpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcblxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgXG59XG5zZXROYW1lKCk7XG5jb25zb2xlLmxvZygnRmluaXNoZWQhJyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==