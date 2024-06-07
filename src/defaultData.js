import myProjectsList from "./index.js";
import { format } from "date-fns";



export function createDefaultData() {
    myProjectsList.addProject("Work");
    myProjectsList.addProject("Reading");
    myProjectsList.addProject("Programming");
    myProjectsList.addProject("Training");

// ------------WORK-TASKS------------

    myProjectsList.addTask(
        "Administration",
        "Responding to emails. Responding to project queries.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "high",
        "Work"
    );

    myProjectsList.addTask(
        "Meetings",
        "Internally. Reproject roles and responsibilities.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Work"
    );

    myProjectsList.addTask(
        "Planning and preparation for an event",
        "Researching ideas for specific activities. Preparation of materials and resources.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Work"
    );

    myProjectsList.addTask(
        "Evaluation tasks",
        "Completing event summary forms. Distributing and collecting participants surveys.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "no priority",
        "Work"
    );

    // -------------READING-TASKS--------------

    myProjectsList.addTask(
        "Javascript",
        "Javascript: The Definitive Guide: Master the World's Most-Used Programming Language",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "high",
        "Reading"
    );

    myProjectsList.addTask(
        "HTML and CSS",
        "'HTML and CSS: Design and Build Websites' by Jon Duckett",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Reading"
    );

    myProjectsList.addTask(
        "Javascript",
        "'Learning JavaScript Design Patterns' by Addy Osmani",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Reading"
    );

     // -------------PROGRAMMING-TASKS--------------

     myProjectsList.addTask(
        "Codewars",
        "Practice javascript.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "low",
        "Programming"
    );

    myProjectsList.addTask(
        "Project: Weather app",
        "Finish a theory part and start the project.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "high",
        "Programming"
    );

    myProjectsList.addTask(
        "Project: Todo",
        "Refactoring.",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Programming"
    );

 // -------------TRAINING-TASKS-------------- 
 
    myProjectsList.addTask(
        "Swimming",
        "The Ab-Blaster Swim Workout (45 min).",
        "",
        format(new Date(), "yyyy-MM-dd"),
        "medium",
        "Training"
    );







    

    
}