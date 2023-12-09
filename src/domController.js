import projectController from "./projectController";
import createTodo from "./todo";

function showNewTodoForm() {}

function displayTask(task) {
  const container = document.createElement("div");
  container.classList.add("task");

  const { title, description, dueDate } = task;

  return container;
}

export default function domController() {
  const projects = projectController();
  const newTaskForm = document.getElementById("new-task");
  const tasksDiv = document.getElementById("tasks");

  function updateScreen() {
    // based on current active project
    projects
      .getProjectByName("allTasks")
      .getTodos()
      .forEach((todo) => {
        const taskCont = displayTask(todo);
        tasksDiv.appendChild(taskCont);
      });
  }

  newTaskForm.addEventListener("submit", (e) => {
    if (newTaskForm.checkValidity()) {
      e.preventDefault();
      const formData = new FormData(newTaskForm);
      const title = formData.get("task-name");
      const description = formData.get("description");
      const dueDate = formData.get("due-date");

      const task = createTodo({ title, description, dueDate, priority: "low" });
      projects.getProjectByName("allTasks").addTodo(task);
      updateScreen();
    }
  });

  /**
   * function to update page display tasks of the current active project
   * activeProject.forEach(todo => displayTask())
   */
}
