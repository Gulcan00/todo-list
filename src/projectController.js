import { createProject } from "./project";

export function projectController() {
    let projects = [];

    const addProject = title => projects.push(createProject(title));

    const deleteProject = title => projects = projects.filter(project => project.title !== title);

    const getProjects = () => projects;

    return {
        addProject,
        deleteProject,
        getProjects
    }
}