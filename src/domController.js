import { formatDistance, isEqual, differenceInDays, format } from "date-fns";
import projectController from "./projectController";
import createTodo from "./todo";

// Helper functions
function createButton(className, innerHTML) {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.innerHTML = innerHTML;
  return btn;
}

function createDiv(className, innerText) {
  const div = document.createElement("div");
  div.classList.add(className);
  if (innerText) div.innerText = innerText;
  return div;
}

function displayProject(title) {
  const projectsDiv = document.querySelector(".projects");
  const btn = document.createElement("button");
  btn.id = title;
  btn.classList.add("tab");
  btn.dataset.tab = title;
  btn.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true"> work </span>${title}`;
  btn.setAttribute("aria-labelledby", `projects-title ${title}`);
  projectsDiv.appendChild(btn);
}

function displayTask(task) {
  const { id, title, description, dueDate, priority, complete } = task;
  const container = document.createElement("div");
  const checkBoxLbl = document.createElement("label");
  const checkBox = document.createElement("input");
  const titleP = document.createElement("p");
  const checkBoxSpan = document.createElement("span");

  container.classList.add("task");
  container.id = id;

  checkBox.name = "complete";
  checkBox.type = "checkbox";
  checkBox.checked = complete;
  checkBoxLbl.setAttribute("aria-label", "Complete");
  checkBoxLbl.id = `checkbox-${id}`;
  checkBoxLbl.setAttribute("aria-labelledby", `checkbox-${id} title-${id}`);
  checkBoxLbl.appendChild(checkBox);

  checkBoxLbl.appendChild(checkBoxSpan);
  container.appendChild(checkBoxLbl);

  titleP.textContent = title;
  titleP.id = `title-${id}`;
  titleP.style.fontWeight = 600;
  titleP.style.textDecoration = checkBox.checked ? "line-through" : "none";
  container.appendChild(titleP);

  if (description) {
    const descriptionDiv = createDiv(description);
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
    const dueDateDiv = createDiv(formattedDate);
    container.appendChild(dueDateDiv);
  }

  if (priority) {
    const priorityDiv = document.createElement("div");
    priorityDiv.style.display = "flex";
    priorityDiv.style.gap = "4px";
    priorityDiv.style.alignItems = "center";
    let color;
    if (priority === "high") {
      color = "red";
    } else if (priority === "medium") {
      color = "orange";
    } else {
      color = "blue";
    }
    priorityDiv.innerHTML = `<span style="color: ${color}; font-size: 18px;" class="material-symbols-outlined" aria-hidden="true">
    priority_high
    </span>
    ${priority}
    `;
    container.appendChild(priorityDiv);
  }

  const actionsDiv = document.createElement("div");
  actionsDiv.style.display = "flex";
  actionsDiv.style.gap = "15px";
  actionsDiv.style.justifyContent = "flex-end";

  const deleteIcon = `<span class="material-symbols-outlined">
  delete
  </span>`;
  const deleteBtn = createButton("delete", deleteIcon);
  deleteBtn.id = `delete-${id}`;
  deleteBtn.setAttribute("aria-label", "Delete");
  deleteBtn.setAttribute("aria-labelledby", `title-${id} delete-${id}`);
  actionsDiv.appendChild(deleteBtn);

  const editIcon = `<span class="material-symbols-outlined" aria-label="Edit">
  edit
  </span>`;
  const editBtn = createButton("edit", editIcon);
  editBtn.id = `edit-${id}`;
  editBtn.setAttribute("aria-label", "Edit");
  editBtn.setAttribute("aria-labelledby", `title-${id} edit-${id}`);

  editBtn.addEventListener("click", () => {
    const form = document.getElementById("new-task");
    const taskId = document.getElementById("task-id");
    const name = document.getElementById("task-name");

    taskId.value = id;
    name.value = title;

    if (description) {
      const descriptionTxt = document.getElementById("description");
      descriptionTxt.value = description;
    }

    if (dueDate) {
      const dueDateInput = document.getElementById("due-date");
      dueDateInput.value = dueDate;
    }

    if (priority) {
      const prioritySelect = document.getElementById("priority");
      prioritySelect.value = priority;
    }

    form.style.display = "flex";
    form.focus();
  });
  actionsDiv.appendChild(editBtn);

  container.appendChild(actionsDiv);

  return container;
}

export default function domController() {
  const projects = projectController();
  const newTaskForm = document.getElementById("new-task");
  const tasksDiv = document.getElementById("tasks");
  const newTaskBtn = document.querySelector("aside :first-child");
  const cancelTaskBtn = document.querySelector("#new-task .cancel");
  const newProjectBtn = document.querySelector("button.new-project");
  const cancelProjectBtn = document.querySelector("#new-project .cancel");
  const newProjectForm = document.querySelector("form#new-project");
  const projectsDiv = document.querySelector(".projects");
  let activeTab = document.querySelector(".tab.active");

  function handleTabClick(updateScreenCB) {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeTab = document.querySelector(".tab.active");
        activeTab.classList.remove("active");
        tab.classList.add("active");
        activeTab = tab;
        updateScreenCB();
      });
    });
  }

  function handleDeleteProject(updateScreenCB) {
    const projectName = document.querySelector(".tab.active").dataset.tab;
    projects
      .getProjectByName(projectName)
      .getTodos()
      .forEach((task) => {
        projects.getProjectByName("All tasks").deleteTodo(task.id);
      });
    projects.deleteProject(projectName);
    const allTasksTab = document.querySelector("button[data-tab='All tasks']");
    allTasksTab.classList.add("active");
    allTasksTab.click();
    projectsDiv.innerHTML = null;
    projects
      .getProjects()
      .filter(
        (project) => project.title !== "All tasks" && project.title !== "Today",
      )
      .forEach((project) => {
        displayProject(project.title);
      });
    handleTabClick(updateScreenCB);
  }

  function updateScreen() {
    // based on current active project
    const projectName = activeTab.dataset.tab;
    tasksDiv.innerHTML = null;
    activeTab = document.querySelector(".tab.active");

    const header = document.querySelector("div.project-header");
    if (header) {
      tasksDiv.removeChild(header);
    }

    if (projectName !== "Today" && projectName !== "All tasks") {
      const div = document.createElement("div");
      div.classList.add("project-header");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "4px";
      const name = document.createElement("h2");
      name.innerText = projectName;
      name.tabIndex = -1;
      div.appendChild(name);

      const deleteIcon = `<span class="material-symbols-outlined" aria-hidden="true">
      delete
      </span>`;
      const deleteBtn = createButton("delete", deleteIcon);
      deleteBtn.setAttribute("aria-label", "Delete");
      deleteBtn.addEventListener("click", () =>
        handleDeleteProject(updateScreen),
      );
      div.appendChild(deleteBtn);

      tasksDiv.appendChild(div);
      name.focus();
    }

    projects
      .getProjectByName(projectName)
      .getTodos()
      .forEach((todo) => {
        const taskContainer = displayTask(todo);
        const checkBox = taskContainer.querySelector('input[type="checkbox"]');
        checkBox.addEventListener("change", () => {
          const updatedTask = { ...todo, complete: checkBox.checked };
          projects
            .getProjects()
            .forEach((project) => project.updateTodo(updatedTask));
          updateScreen();
        });
        const deleteBtn = taskContainer.querySelector("button.delete");
        deleteBtn.addEventListener("click", () => {
          projects
            .getProjects()
            .forEach((project) => project.deleteTodo(todo.id));
          updateScreen();
        });
        tasksDiv.appendChild(taskContainer);
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
      const taskId = parseInt(formData.get("task-id"), 10);
      if (!taskId) {
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
      } else {
        activeTab = document.querySelector(".tab.active");
        projects
          .getProjectByName(activeTab.dataset.tab)
          .updateTodo({ id: taskId, title, description, dueDate, priority });

        if (activeTab.dataset.tab !== "All tasks") {
          projects
            .getProjectByName("All tasks")
            .updateTodo({ id: taskId, title, description, dueDate, priority });
        }
      }

      updateScreen();

      newTaskForm.reset();
      newTaskForm.style.display = getNewDisplayValue(newTaskForm);
    }
  });

  newTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = getNewDisplayValue(newTaskForm);
    newTaskForm.focus();
  });
  cancelTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = getNewDisplayValue(newTaskForm);
  });

  newProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = getNewDisplayValue(newProjectForm);
    newProjectForm.focus();
  });
  cancelProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = getNewDisplayValue(newProjectForm);
  });

  newProjectForm.addEventListener("submit", (e) => {
    if (newProjectForm.checkValidity()) {
      e.preventDefault();
      const formData = new FormData(newProjectForm);
      const title = formData.get("project-name");
      if (!projects.getProjectByName(title)) {
        displayProject(title);
        projects.addProject(title);
        handleTabClick(updateScreen);
        newProjectForm.style.display = getNewDisplayValue(newProjectForm);
      }
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
  handleTabClick(updateScreen);
  projects
    .getProjectByName(activeTab.dataset.tab)
    .getTodos()
    .forEach((todo) => {
      const taskCont = displayTask(todo);
      tasksDiv.appendChild(taskCont);
    });
}
