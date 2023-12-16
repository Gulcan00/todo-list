import { formatDistance } from 'date-fns';
import projectController from './projectController';
import createTodo from './todo';

function displayProject(title) {
  /*
   <button type="button" class="tab" data-tab="Today">
          <span class="material-symbols-outlined"> today </span>
          Today
        </button>
        */
  const sidebar = document.querySelector('nav.sidebar');
  const btn = document.createElement('button');
  btn.classList.add('tab');
  btn.dataset.tab = title;
  btn.innerHTML = `<span class="material-symbols-outlined"> work </span>${title}`;
  sidebar.appendChild(btn);
}

function displayTask(task) {
  const container = document.createElement('div');
  container.classList.add('task');

  const { title, description, dueDate, priority } = task;

  const checkBoxLbl = document.createElement('label');
  checkBoxLbl.htmlFor = 'complete';
  const checkBox = document.createElement('input');
  checkBox.id = 'complete';
  checkBox.name = 'complete';
  checkBox.type = 'checkbox';
  checkBox.checked = task.complete;
  checkBox.addEventListener('change', () => {
    const updatedTask = task.toggleComplete();
    checkBox.checked = updatedTask.complete;
  });
  container.appendChild(checkBox);
  const checkBoxSpan = document.createElement('span');
  checkBoxLbl.appendChild(checkBoxSpan);
  container.appendChild(checkBoxLbl);

  const titleDiv = document.createElement('div');
  titleDiv.innerText = title;
  titleDiv.style.fontWeight = 600;
  container.appendChild(titleDiv);

  if (description) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = description;
    container.appendChild(descriptionDiv);
  }

  if (dueDate) {
    const formattedDate = formatDistance(new Date(dueDate), new Date(), {
      addSuffix: true,
    });
    const dueDateDiv = document.createElement('div');
    dueDateDiv.innerText = formattedDate;
    container.appendChild(dueDateDiv);
  }

  if (priority) {
    const priorityDiv = document.createElement('div');
    priorityDiv.innerText = priority;
    container.appendChild(priorityDiv);
  }

  return container;
}

export default function domController() {
  const projects = projectController();
  const newTaskForm = document.getElementById('new-task');
  const tasksDiv = document.getElementById('tasks');
  const addBtn = document.querySelector('.sidebar :first-child');
  const cancelBtn = document.querySelector('.cancel');
  let currentActive = document.querySelector('.tab.active');
  const newProjectBtn = document.querySelector('btn.new-project');
  const newProjectForm = document.querySelector('form.new-project');

  function updateScreen() {
    // based on current active project
    tasksDiv.innerHTML = null;
    const currentTab = document.querySelector('.tab.active');
    const projectName = currentTab.dataset.tab;
    projects
      .getProjectByName(projectName)
      .getTodos()
      .forEach((todo) => {
        const taskCont = displayTask(todo);
        tasksDiv.appendChild(taskCont);
      });
  }

  function handleTabClick() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        currentActive = document.querySelector('.tab.active');
        currentActive.classList.remove('active');
        tab.classList.add('active');
        updateScreen();
      });
    });
  }

  function toggleVisibility() {
    newTaskForm.style.display =
      newTaskForm.style.display === 'none' || newTaskForm.style.display === ''
        ? 'flex'
        : 'none';
  }

  newTaskForm.addEventListener('submit', (e) => {
    if (newTaskForm.checkValidity()) {
      e.preventDefault();
      const formData = new FormData(newTaskForm);
      const title = formData.get('task-name');
      const description = formData.get('description');
      const dueDate = formData.get('due-date');
      const priority = formData.get('priority');

      const task = createTodo({ title, description, dueDate, priority });

      if (dueDate === new Date()) {
        projects.getProjectByName('Today').addTodo(task);
      }
      
      projects.getProjectByName(currentActive.dataset.tab).addTodo(task);
      updateScreen();

      newTaskForm.reset();
      toggleVisibility();
    }
  });

  addBtn.addEventListener('click', toggleVisibility);
  cancelBtn.addEventListener('click', toggleVisibility);
  handleTabClick();

  newProjectForm.addEventListener('submit', (e) => {
    if (newProjectForm.checkValidity()) {
      e.preventDefault();
      const formData = new FormData(newProjectForm);
      const title = formData.get('title');
      displayProject(title);
      projects.addProject(title);
      handleTabClick();
    }
  })
}