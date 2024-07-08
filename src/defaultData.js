// import todoList from "./index.js";
import { todoList } from "./todo-list.js";
import { format } from "date-fns";

export function createDefaultData() {
    todoList.addProject("Work");
    todoList.addProject("Reading");
    todoList.addProject("Programming");
    todoList.addProject("Training");

// ------------WORK-TASKS------------

    todoList.addTask(
        "Administration",
        "Responding to emails. Responding to project queries.",
        "",
        "2024-06-07",
        // format(new Date(), "yyyy-MM-dd"),
        "high",
        "Work"
    );    

    todoList.addTask(
        "Meetings",
        "Internally. Reproject roles and responsibilities.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Work"
    );

    todoList.addTask(
        "Planning and preparation for an event",
        "Researching ideas for specific activities. Preparation of materials and resources.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Work"
    );

    todoList.addTask(
        "Evaluation tasks",
        "Completing event summary forms. Distributing and collecting participants surveys.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "no priority",
        "Work"
    );

    // -------------READING-TASKS--------------

    todoList.addTask(
        "Javascript",
        "Javascript: The Definitive Guide: Master the World's Most-Used Programming Language",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "high",
        "Reading"
    );

    todoList.addTask(
        "HTML and CSS",
        "'HTML and CSS: Design and Build Websites' by Jon Duckett",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Reading"
    );

    todoList.addTask(
        "Javascript",
        "'Learning JavaScript Design Patterns' by Addy Osmani",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Reading"
    );

     // -------------PROGRAMMING-TASKS--------------

     todoList.addTask(
        "Codewars",
        "Practice javascript.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Programming"
    );

    todoList.addTask(
        "Project: Weather app",
        "Finish a theory part and start the project.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "high",
        "Programming"
    );

    todoList.addTask(
        "Project: Todo",
        "Refactoring.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Programming"
    );

 // -------------TRAINING-TASKS-------------- 
 
    todoList.addTask(
        "Swimming",
        "The Ab-Blaster Swim Workout (45 min).",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Training"
    );
};

