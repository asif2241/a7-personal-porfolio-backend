import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../admin/admin.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { createProjectZodSchema, updateProjectZodSchema } from "./project.validation";

export const ProjectRoutes = Router()


ProjectRoutes.post("/add-project", checkAuth(...Object.values(Role)), validateRequest(createProjectZodSchema), ProjectControllers.createProject)
ProjectRoutes.patch("/update-project/:id", checkAuth(...Object.values(Role)), validateRequest(updateProjectZodSchema), ProjectControllers.updateProject)
ProjectRoutes.get("", ProjectControllers.getAllProjects)
ProjectRoutes.delete("/delete/:id", checkAuth(...Object.values(Role)), ProjectControllers.deleteProject)