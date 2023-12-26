import { formatDistance, isEqual, differenceInDays, format } from "date-fns";
import projectController from "./projectController";
import createTodo from "./todo";

function displayProject(title) {
  const sidebar = document.querySelector("nav.sidebar");
  const btn = document.createElement("button");
  btn.classList.add("tab");
  btn.dataset.tab = title;
  btn.innerHTML = `<span class="material-symbols-outlined"> work </span>${title}`;
  sidebar.appendChild(btn);
}

function displayTask(task, deleteTask) {
  const container = document.createElement("div");
  container.classList.add("task");

  const { title, description, dueDate, priority } = task;

  const checkBoxLbl = document.createElement("label");
  const checkBox = document.createElement("input");
  const titleDiv = document.createElement("div");

  checkBox.name = "complete";
  checkBox.type = "checkbox";
  checkBox.checked = task.complete;
  checkBox.addEventListener("change", () => {
    const updatedTask = task.toggleComplete();
    checkBox.checked = updatedTask.complete;
    titleDiv.style.textDecoration =
      titleDiv.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });
  checkBoxLbl.appendChild(checkBox);
  const checkBoxSpan = document.createElement("span");
  checkBoxLbl.appendChild(checkBoxSpan);
  container.appendChild(checkBoxLbl);

  titleDiv.innerText = title;
  titleDiv.style.fontWeight = 600;
  container.appendChild(titleDiv);

  if (description) {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.innerText = description;
    container.appendChild(descriptionDiv);
  }

  if (dueDate) {
    const dueDateObj = new Date(dueDate);
    dueDateObj.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let formattedDate;

    if (isEqual(dueDateObj, today)) {
      formattedDate = "Today";
    } else if (differenceInDays(dueDateObj, today) > 7) {
      formattedDate = format(dueDateObj, "dd/MM/yyyy");
    } else {
      formattedDate = formatDistance(dueDateObj, today, {
        addSuffix: true,
      });
    }
    const dueDateDiv = document.createElement("div");
    dueDateDiv.innerText = formattedDate;
    container.appendChild(dueDateDiv);
  }

  if (priority) {
    const priorityDiv = document.createElement("div");
    priorityDiv.innerText = priority;
    container.appendChild(priorityDiv);
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<span class="material-symbols-outlined">
  delete
  </span>`;

  deleteBtn.addEventListener("click", () => {
    deleteTask(task.id);
  });

  container.appendChild(deleteBtn);

  return container;
}

export default function domController() {
  const projects = projectController();
  const newTaskForm = document.getElementById("new-task");
  const tasksDiv = document.getElementById("tasks");
  const newTaskBtn = document.querySelector(".sidebar :first-child");
  const cancelTaskBtn = document.querySelector("#new-task .cancel");
  let activeTab = document.querySelector(".tab.active");
  const newProjectBtn = document.querySelector("button.new-project");
  const cancelProjectBtn = document.querySelector("#new-project .cancel");
  const newProjectForm = document.querySelector("form#new-project");

  function deleteTask(id) {
    projects.getProjectByName(activeTab.dataset.tab).deleteTodo(id);
    // eslint-disable-next-line no-use-before-define
    updateScreen();
  }

  function updateScreen() {
    // based on current active project
    tasksDiv.innerHTML = null;
    activeTab = document.querySelector(".tab.active");
    const projectName = activeTab.dataset.tab;
    projects
      .getProjectByName(projectName)
      .getTodos()
      .forEach((todo) => {
        const taskCont = displayTask(todo, deleteTask);
        tasksDiv.appendChild(taskCont);
      });
  }

  function handleTabClick() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeTab = document.querySelector(".tab.active");
        activeTab.classList.remove("active");
        tab.classList.add("active");
        updateScreen();
      });
    });
  }

  function getNewDisplayValue(form) {
    return form.style.display === "none" || form.style.display === ""
      ? "flex"
      : "none";
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

      const dueDateObj = new Date(dueDate);
      dueDateObj.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (isEqual(dueDateObj, today)) {
        projects.getProjectByName("Today").addTodo(task);
      }

      activeTab = document.querySelector(".tab.active");
      projects.getProjectByName(activeTab.dataset.tab).addTodo(task);

      if (activeTab.dataset.tab !== "All tasks") {
        projects.getProjectByName("All tasks").addTodo(task);
      }

      updateScreen();

      newTaskForm.reset();
      newTaskForm.style.display = getNewDisplayValue(newTaskForm);
    }
  });

  newTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = getNewDisplayValue(newTaskForm);
  });
  cancelTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = getNewDisplayValue(newTaskForm);
  });

  newProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = getNewDisplayValue(newProjectForm);
  });
  cancelProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = getNewDisplayValue(newProjectForm);
  });

  newProjectForm.addEventListener("submit", (e) => {
    if (newProjectForm.checkValidity()) {
      e.preventDefault();
      const formData = new FormData(newProjectForm);
      const title = formData.get("project-name");
      displayProject(title);
      projects.addProject(title);
      handleTabClick();
      newProjectForm.style.display = getNewDisplayValue(newProjectForm);
    }
  });

  projects
    .getProjects()
    .filter(
      (project) => project.title !== "All tasks" && project.title !== "Today",
    )
    .forEach((project) => {
      displayProject(project.title);
    });
  handleTabClick();
  projects
    .getProjectByName(activeTab.dataset.tab)
    .getTodos()
    .forEach((todo) => {
      const taskCont = displayTask(todo, deleteTask);
      tasksDiv.appendChild(taskCont);
    });
}
