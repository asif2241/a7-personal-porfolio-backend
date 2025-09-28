import { IProject } from "./project.interface";
import { Projects } from "./project.model";

const createProject = async (payload: Partial<IProject>) => {
    const project = await Projects.create(payload);
    return project
}

const updateProject = async (id: string, payload: Partial<IProject>) => {
    const updatedProject = await Projects.findByIdAndUpdate(id, payload, { new: true });
    return updatedProject
}


const getAllProjects = async () => {
    const allProjects = await Projects.find({});

    const totalProjects = await Projects.countDocuments();

    return {
        data: allProjects,
        meta: {
            total: totalProjects
        }
    }
}
export const ProjectsServices = {
    createProject,
    updateProject,
    getAllProjects
}