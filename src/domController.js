import projectController from "./projectController";
import createTodo from "./todo";


function displayTask(task) {
  const container = document.createElement("div");
  container.classList.add("task");

  const { title, description, dueDate, priority } = task;

  const titleDiv = document.createTextNode(title);
  container.appendChild(titleDiv);

  const descriptionDiv = document.createTextNode(description);
  container.appendChild(descriptionDiv);

  const dueDateDiv = document.createTextNode(dueDate);
  container.appendChild(dueDateDiv);

  const priorityDiv = document.createTextNode(priority);
  container.appendChild(priorityDiv);

  return container;
}

export default function domController() {
  const projects = projectController();
  const newTaskForm = document.getElementById("new-task");
  const tasksDiv = document.getElementById("tasks");
  const addBtn = document.querySelector('.sidebar :first-child');
  const cancelBtn = document.querySelector('.cancel');

  function updateScreen() {
    // based on current active project
    tasksDiv.innerHTML = null;
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
      const priority = formData.get("priority");

      const task = createTodo({ title, description, dueDate, priority });
      projects.getProjectByName("allTasks").addTodo(task);
      updateScreen();

      newTaskForm.reset();
    }
  });

  function toggleVisibility() {
    newTaskForm.style.display = (newTaskForm.style.display === "none" || newTaskForm.style.display === "") ? "flex" : "none";
  }

  addBtn.addEventListener("click", toggleVisibility);
  cancelBtn.addEventListener("click", toggleVisibility);
}
