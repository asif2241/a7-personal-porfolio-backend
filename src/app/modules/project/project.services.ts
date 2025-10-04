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

const getSingleProject = async (id: string) => {
    const project = await Projects.findById(id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    project!.views += 1
    await project?.save()
    return project
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

const deleteProject = async (id: string) => {
    const deletedProject = await Projects.findByIdAndDelete(id);
    return deletedProject
}

export const ProjectsServices = {
    createProject,
    updateProject,
    getAllProjects,
    deleteProject,
    getSingleProject
}