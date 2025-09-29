import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../admin/admin.interface";

export const ProjectRoutes = Router()


ProjectRoutes.post("/add-project", checkAuth(...Object.values(Role)), ProjectControllers.createProject)
ProjectRoutes.patch("/update-project/:id", checkAuth(...Object.values(Role)), ProjectControllers.updateProject)
ProjectRoutes.get("", ProjectControllers.getAllProjects)
ProjectRoutes.delete("/delete/:id", checkAuth(...Object.values(Role)), ProjectControllers.deleteProject)