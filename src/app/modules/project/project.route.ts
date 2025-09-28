import { Router } from "express";
import { ProjectControllers } from "./project.controller";

export const ProjectRoutes = Router()


ProjectRoutes.post("/add-project", ProjectControllers.createProject)
ProjectRoutes.patch("/update-project/:id", ProjectControllers.updateProject)
ProjectRoutes.get("", ProjectControllers.getAllProjects)
ProjectRoutes.delete("/delete/:id", ProjectControllers.deleteProject)