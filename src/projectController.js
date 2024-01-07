import createProject from "./project";
import createTodo from "./todo";

export default function projectController() {
  let projects = [createProject(), createProject("Today")];

  if (!localStorage.getItem("projectNames")) {
    localStorage.setItem(
      "projectNames",
      JSON.stringify(["All tasks", "Today"]),
    );
  } else {
    const projectNames = JSON.parse(localStorage.getItem("projectNames"));
    const retrievedProjects = [];
    projectNames.forEach((projectName) => {
      const projectTasks = JSON.parse(localStorage.getItem(projectName));
      retrievedProjects.push(createProject(projectName));

      const todos = projectTasks.map((task) => createTodo(task));
      retrievedProjects
        .find((project) => project.title === projectName)
        .addTodos(todos);
    });
    projects = retrievedProjects;
  }

  const addProject = (title) => {
    const projectNames = JSON.parse(localStorage.getItem("projectNames"));
    projectNames.push(title);
    localStorage.setItem("projectNames", JSON.stringify(projectNames));
    projects.push(createProject(title));
  };

  const deleteProject = (title) => {
    projects = projects.filter((project) => project.title !== title);
    localStorage.removeItem(title);
    const projectNames = projects.map((project) => project.title);
    localStorage.setItem("projectNames", JSON.stringify(projectNames));
  };

  const getProjects = () => projects;

  const getProjectByName = (title) =>
    projects.find((project) => project.title === title);

  return {
    addProject,
    deleteProject,
    getProjects,
    getProjectByName,
  };
}
