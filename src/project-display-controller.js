import myProjectsList from "./index.js"

export function numberOfProjectTasks(project) {
    const number = myProjectsList.getTasksByProject(project).length;
    return number;
}