import projectController from "./projectController";
import { createTodo } from "./todo";

function showNewTodoForm() {
    


}

function displayTask() {

}


export default function domController() {
    const projects = projectController();
    const newTaskForm = document.getElementById('new-task');

    newTaskForm.addEventListener('submit', (e) => {
        if (newTaskForm.checkValidity()) {
            e.preventDefault();
            const formData = new FormData(newTaskForm);
            const title = formData.get('task-name');
            const description = formData.get('description');
            const dueDate = formData.get('due-date');

            const task = createTodo({title, description, dueDate, priority: "low"});
            projects.getProjectByName('allTasks').addTodo(task);
            
        }

    });

    /**
     * function to update page display tasks of the current active project
     * activeProject.forEach(todo => displayTask())
     */
}