import { createProject } from "./project";

export default function projectController() {
    let projects = [createProject('allTasks')];

    const addProject = title => projects.push(createProject(title));

    const deleteProject = title => {
        projects = projects.filter(project => project.title !== title);
    }

    const getProjects = () => projects;

    const getProjectByName = (title) => projects.find(project => project.title === title);

    return {
        addProject,
        deleteProject,
        getProjects,
        getProjectByName
    }
}